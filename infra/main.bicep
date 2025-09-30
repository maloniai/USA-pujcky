@description('The name of the environment (e.g., dev, prod)')
param environmentName string

@description('The location where resources will be deployed')
param location string = resourceGroup().location

// Generate a unique token for resource naming
var resourceToken = uniqueString(subscription().id, resourceGroup().id, location, environmentName)

// Resource name variables following Azure naming conventions
var staticWebAppName = 'swa${resourceToken}'
var logAnalyticsWorkspaceName = 'law${resourceToken}'
var applicationInsightsName = 'ai${resourceToken}'
var managedIdentityName = 'id${resourceToken}'

// Tags
var tags = {
  'azd-env-name': environmentName
  project: 'loan-ai-portal'
  environment: environmentName
}

// User-Assigned Managed Identity (required by AZD rules)
resource managedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: managedIdentityName
  location: location
  tags: tags
}

// Log Analytics Workspace for monitoring
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: logAnalyticsWorkspaceName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// Application Insights for monitoring
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: applicationInsightsName
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// Azure Static Web Apps
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticWebAppName
  location: location
  tags: union(tags, {
    'azd-service-name': 'loan-ai-portal'
  })
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  properties: {
    buildProperties: {
      appLocation: '/'
      outputLocation: 'out'
      appBuildCommand: 'npm run build'
    }
    repositoryUrl: 'https://github.com/malonitest/USA-pujcky'
    branch: 'master'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
  }
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${managedIdentity.id}': {}
    }
  }
}

// Link Application Insights to Static Web App
resource staticWebAppAppInsights 'Microsoft.Web/staticSites/linkedBackends@2022-09-01' = {
  parent: staticWebApp
  name: 'appinsights'
  properties: {
    backendResourceId: applicationInsights.id
    region: location
  }
}

// Output required by AZD rules
@description('The resource ID of the resource group')
output RESOURCE_GROUP_ID string = resourceGroup().id

@description('The name of the Static Web App')
output STATIC_WEB_APP_NAME string = staticWebApp.name

@description('The URL of the Static Web App')
output STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'

@description('The resource ID of the Static Web App')
output STATIC_WEB_APP_ID string = staticWebApp.id

@description('The Application Insights connection string')
output APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString

@description('The name of the managed identity')
output MANAGED_IDENTITY_NAME string = managedIdentity.name