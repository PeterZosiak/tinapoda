<template>
  <div>
    <!-- Portfolio -->
    <section class="ann-portfolio-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s211.webp" alt="Profesionální extra služby pro krásnou pleť">
            </div>
          </div>
          <div class="col-md-6 col-sm-12">

            <h2 class="mb-5 text-center">ČIŠTĚNÍ PLETI a PEELING</h2>
            <div class="px-3">
              <span class="strong-b">Komplexní kosmetická konzultace v ceně každé procedury</span>
              <ul class="services">
                <li>Detailní analýza typu a stavu pleti</li>
                <li>Posouzení a doporučení domácí péče o pleť</li>
                <li>Výběr nejvhodnějších kosmetických produktů na míru vaší pleti</li>
                <li>Profesionální doporučení od zkušené kosmetičky pro dlouhodobě krásnou a zdravou pleť</li>
              </ul>
            </div>
            <div class="mb-5"></div>

            <ServiceItem title="Hloubkové Čištění Pleti s ALGINAT MASKOU" price="2.200,- Kč" description="" />
            <ServiceItem title="SKIN RESULTS AHA “EXPERT" price="1.900,-Kč" description="Regulace tvorby mazu, 40% AHA, 60% AHA kyseliny" />
            <ServiceItem title="DERMA CONTROL" price="2.200,-Kč" description="Mastní, aknózní a problematická pleť" />
            <ServiceItem title="PRX-T33 Biorevitalizace" price="2.300,-Kč" description="Revitalizační peeling nové generace - obličej" />
            <ServiceItem :is-last="true" title="PRX-T33 Biorevitalizace" price="3.700,-Kč" description="Revitalizační peeling nové generace. Obličej, krk, dekolt" />
          </div>
        </div>
      </div>
    </section>
    <AdditionalServices />
    <section class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <ServiceItem title="AKNE Peel - Aknózní a Mastná Kůže" price="2.300,-Kč" description="Mechanismus působení: Kombinace specifických a aktivních látek - Kyseliny Salicylové, kyseliny Mandlové a kyseliny Mléčné pro obnovení správných podmínek kožní bariéry, snížení zánětu a tvorby kožního mazu.
" />
            <ServiceItem title="V-CARBON System" price="2.300,-Kč" description="První protivráskový peeling s aktivním Karbonem a Hexapeptidy. Inovativní neinvazivní procedura s aktivním karbonem (uhlím), velmi vzácnými antioxidanty, ovocnými kyselinami a hexapeptidy vhodná pro aktivní omlazení pokožky s okamžitým Anti-Age efektem.
" />
            <ServiceItem title="DERMAPEN - Vyhlazení Textury, Omlazení Pleti" price="2.700,- Kc obličej" price2="3.500,- Kc obličej + dekolt" description="Kombinace mikrojehličkování s nejpokročilejšími séry na trhu s kyselinou hyaluronovou." />
            <ServiceItem :is-last="true" title="DERMAPLANING" price="700,- Kč" price2="1.200,-Kč" description="Manuální technika exfoliace pokožky a odstranění chloupků (nelze provést jako samostatnou službu)." />
          </div>
          <div class="col-md-6 col-sm-12">

            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s212.webp" alt="Luxusní péče o pleť na míru">
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <hr>
      </div>
    </div>
    <Services :is-heading="false" />
  </div>
</template>


<script setup>
import ServiceItem from '~/components/service-item.vue';
useHead({
  title: 'Čištění Pleti a Peeling – Profesionální Kosmetické Procedury | Tina Poda Beauty Expert na Krásu',
  description: 'Prozkoumejte naše profesionální čištění pleti a peelingové procedury v Tina Poda Beauty Expert na Krásu. Nabízíme hloubkové čištění pleti s alginátovou maskou, anti-pigmentační peelingy, revitalizační PRX-T33 Biorevitalizace, Dermapen a Dermaplaning. Rezervujte si svůj termín ještě dnes pro zdravou a krásnou pleť!',
  image: 'https://tinapoda.beauty/img/s211.webp',
  url: 'https://tinapoda.beauty/sluzby/peelingy',

})

useSeoMeta({
  keywords: 'Čištění pleti,Peeling pleti,Hloubkové čištění pleti,Anti- aging peeling,Exfoliace pleti,Kosmetické peelingy,Profesionální čištění pleti,Aknózní pleť,Hydratační peeling,Revitalizační peeling,Dermapen,Dermaplaning,Kosmetické procedury Praha,Kosmetický salón Praha',
  title: 'Čištění Pleti a Peeling – Profesionální Kosmetické Procedury | Tina Poda Beauty Expert na Krásu',
  description: 'Prozkoumejte naše profesionální čištění pleti a peelingové procedury v Tina Poda Beauty Expert na Krásu. Nabízíme hloubkové čištění pleti s alginátovou maskou, anti-pigmentační peelingy, revitalizační PRX-T33 Biorevitalizace, Dermapen a Dermaplaning. Rezervujte si svůj termín ještě dnes pro zdravou a krásnou pleť!',
  image: 'https://tinapoda.beauty/img/s211.webp',
  url: 'https://tinapoda.beauty/sluzby/peelingy',
  ogTitle: 'Čištění Pleti a Peeling – Profesionální Kosmetické Procedury | Tina Poda Beauty Expert na Krásu',
  ogDescription: 'Prozkoumejte naše profesionální čištění pleti a peelingové procedury v Tina Poda Beauty Expert na Krásu. Nabízíme hloubkové čištění pleti s alginátovou maskou, anti-pigmentační peelingy, revitalizační PRX-T33 Biorevitalizace, Dermapen a Dermaplaning. Rezervujte si svůj termín ještě dnes pro zdravou a krásnou pleť!',
  ogImage: 'https://tinapoda.beauty/img/s211.webp',
  ogUrl: 'https://tinapoda.beauty/sluzby/peelingy',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Tina Poda | Beauty Expert na Krásu',
})

onMounted(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tina Poda | Beauty Expert na Krásu",
    "image": "https://www.tinapoda.beauty/img/logo-dark.webp",
    "@id": "https://www.tinapoda.beauty",
    "url": "https://www.tinapoda.beauty",
    "telephone": "+420 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vinohradská 123",
      "addressLocality": "Praha",
      "postalCode": "120 00",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.08804,
      "longitude": 14.42076
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        'Saturday'
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/tina.t.balogova",
      "https://www.instagram.com/tinapodaesthetics/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kosmetické Služby",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Omlazení a Hydratace – AQUActive HYALURON Intensive",
            "description": "Unikátní ošetření pleti s 5 druhy kyseliny hyaluronové poskytující intenzivní hydrataci a omlazení pleti.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2490.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2490.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RETINOL TRIPLE A",
            "description": "Ošetření s inovativním trojitým Retinolem pro dosažení vysoce účinného protivráskového efektu pleti a dekoltu.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2490.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2490.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FOREST Ritual",
            "description": "Smyslné rituálové ošetření pleti s vůní lesa, muzikoterapií a speciální masáží pro relaxaci a regeneraci.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2790.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SPICEup Ritual Intense",
            "description": "Podzimní vícesmyslové SPA rituál ošetření s exotickým kořením pro vitalitu, energii a mládí pleti.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2790.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEE CHANGE - COLAGEN Omlazení",
            "description": "Ošetření s mořskými řasami a kolagenem pro zvýšení pevnosti a regeneraci pleti, ideální pro každé roční období.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2790.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PERFECT AGE – Omlazující Ošetření s Kmenovými Buňkami",
            "description": "Anti-aging ošetření s kmenovými buňkami pro prevenci a dosažení nadčasové krásy pleti.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2790.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LUXESSE GLOW TAHITS PEARLS “RITUAL”",
            "description": "Exkluzivní VIP ošetření propojené s Rituálem Tina Poda, zahrnující luxusní produkty Luxesse Phyris a speciální masáže.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "3700.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3700.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT120M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ANTI Pigment “RITUAL” MANSARD",
            "description": "Vysoce účinné antipigmentační ošetření zaměřené na odstranění existujících pigmentů a zabránění tvorbě nových pigmentových skvrn.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2790.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HLÚBOKOVÉ ČIŠTĚNÍ PLETI S ALGINAT MASKOU",
            "description": "Hloubkové čištění pleti s alginátovou maskou poskytující intenzivní hydrataci a detoxikaci pokožky.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2200.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2200.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SKIN RESULTS AHA “EXPERT”",
            "description": "Regulace tvorby mazu s 40% a 60% AHA kyselinami pro exfoliaci a revitalizaci pleti.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "1900.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1900.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DERMA CONTROL",
            "description": "Ošetření mastné, aknózní a problematické pleti pro zklidnění a regulaci tvorby mazu.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2200.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2200.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PRX-T33 Biorevitalizace",
            "description": "Revitalizační peeling nové generace pro obličej a dekolt.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "3700.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "3700.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT120M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AKNE Peel - Aknózní a Mastná Kůže",
            "description": "Kombinace kyseliny Salicylové, Mandlové a Mléčné pro obnovení kožní bariéry, snížení zánětu a regulaci tvorby mazu.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2300.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2300.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "V-CARBON System",
            "description": "První protivráskový peeling s aktivním Karbonem a Hexapeptidy. Inovativní neinvazivní procedura s aktivním karbonem, antioxidanty, ovocnými kyselinami a hexapeptidy pro aktivní omlazení pokožky s okamžitým Anti-Age efektem.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2300.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2300.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DERMAPEN - Vyhlazení Textury, Omlazení Pleti",
            "description": "Kombinace mikrojehličkování s nejpokročilejšími séry na trhu s kyselinou hyaluronovou pro vyhlazení textury a omlazení pleti.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "2700.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2700.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT90M"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DERMAPLANING",
            "description": "Manuální technika exfoliace pokožky a odstranění chloupků. Nelze provést jako samostatnou službu.",
            "image": "https://tinapoda.beauty/img/s211.webp",
            "offers": {
              "@type": "Offer",
              "price": "700.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/peelingy",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "700.00",
                "priceCurrency": "CZK",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": 1
                }
              }
            },
            "duration": "PT60M"
          }
        }
      ]
    }
  });
  document.head.appendChild(script);
});

</script>