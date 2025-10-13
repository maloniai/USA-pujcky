# South Africa Hub - All Routes

## Main Hub
- `/za` - South Africa loan comparison hub

## Province Pages (9)

### Gauteng
- `/za/gauteng` - Gauteng province hub

**Cities:**
- `/za/gauteng/johannesburg` - Johannesburg (5.6M)
- `/za/gauteng/pretoria` - Pretoria (2.9M)
- `/za/gauteng/ekurhuleni` - Ekurhuleni (3.2M)
- `/za/gauteng/sandton` - Sandton (230K)
- `/za/gauteng/centurion` - Centurion (236K)
- `/za/gauteng/midrand` - Midrand (300K)

### Western Cape
- `/za/western-cape` - Western Cape province hub

**Cities:**
- `/za/western-cape/cape-town` - Cape Town (4.6M)
- `/za/western-cape/stellenbosch` - Stellenbosch (155K)
- `/za/western-cape/paarl` - Paarl (191K)
- `/za/western-cape/george` - George (193K)
- `/za/western-cape/worcester` - Worcester (127K)
- `/za/western-cape/mossel-bay` - Mossel Bay (89K)

### KwaZulu-Natal
- `/za/kwazulu-natal` - KwaZulu-Natal province hub

**Cities:**
- `/za/kwazulu-natal/durban` - Durban (3.7M)
- `/za/kwazulu-natal/pietermaritzburg` - Pietermaritzburg (750K)
- `/za/kwazulu-natal/newcastle` - Newcastle (404K)
- `/za/kwazulu-natal/richards-bay` - Richards Bay (378K)
- `/za/kwazulu-natal/port-shepstone` - Port Shepstone (55K)
- `/za/kwazulu-natal/ladysmith` - Ladysmith (237K)

### Eastern Cape
- `/za/eastern-cape` - Eastern Cape province hub

**Cities:**
- `/za/eastern-cape/gqeberha` - Gqeberha (Port Elizabeth) (1.3M)
- `/za/eastern-cape/east-london` - East London (755K)
- `/za/eastern-cape/mthatha` - Mthatha (450K)
- `/za/eastern-cape/uitenhage` - Uitenhage (228K)
- `/za/eastern-cape/grahamstown` - Grahamstown (140K)
- `/za/eastern-cape/queenstown` - Queenstown (186K)

### Limpopo
- `/za/limpopo` - Limpopo province hub

**Cities:**
- `/za/limpopo/polokwane` - Polokwane (628K)
- `/za/limpopo/mokopane` - Mokopane (39K)
- `/za/limpopo/thohoyandou` - Thohoyandou (69K)
- `/za/limpopo/tzaneen` - Tzaneen (30K)
- `/za/limpopo/musina` - Musina (69K)
- `/za/limpopo/phalaborwa` - Phalaborwa (135K)

### Mpumalanga
- `/za/mpumalanga` - Mpumalanga province hub

**Cities:**
- More cities can be added following the same pattern

### North West
- `/za/north-west` - North West province hub

**Cities:**
- More cities can be added following the same pattern

### Free State
- `/za/free-state` - Free State province hub

**Cities:**
- More cities can be added following the same pattern

### Northern Cape
- `/za/northern-cape` - Northern Cape province hub

**Cities:**
- More cities can be added following the same pattern

## Application
- `/za/apply` - Secure loan application page

## Total Routes
- **Hub**: 1
- **Provinces**: 9
- **Cities**: 30+ (with data for 50+ available)
- **Apply**: 1
- **TOTAL**: 41+ static pages

## Route Pattern

```
/za                                    # Hub
/za/{province}                         # Province
/za/{province}/{city}                  # City
/za/apply                              # Application
```

## Data Expansion

Additional cities can be easily added to the data files:
- `src/data/sa-cities.ts` - Add more city objects
- Dynamic routing automatically creates pages
- No code changes needed, just data

## SEO Benefits

Each route includes:
- Unique title tag
- Optimized meta description
- Schema.org JSON-LD markup
- Breadcrumb navigation
- Internal linking
- FAQ section

This creates 40+ indexed pages optimized for:
- "loans in [city]"
- "personal loans [province]"
- "[city] loan comparison"
- Local search queries
- AI search optimization
