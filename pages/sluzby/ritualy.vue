<template>
  <div>
    <!-- Portfolio -->
    <section class="ann-portfolio-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <img class="mb-5 text-center img-fluid mx-auto d-block service-logo" src="/img/phyris_logo_gold.webp" alt="phyris logo" />
            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s111.webp" alt="AQUActive HYALURON Intensive – omlazení a hydratace pleti">
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <h2 class="mb-5 text-center">Omlazení a hydratace</h2>
            <ServiceItem title="AQUActive HYALURON Intensive" price="2.490,-Kč / 90 min" price2="3.200,-Kč / 120 min Ritual zážitkové ošetření" description="AQUActive HYALURON Intensive je unikátní ošetření pleti s 5 druhy kyseliny hyaluronové, které poskytuje maximální hydratační péči a luxusní zážitek s autorskou masáží Tina Poda. Díky nové složce HYDRO-BOOST doslova přivodní žíznivou pleť a okamžitě poskytne intenzivní hydrataci. Výsledkem je maximálně vyhlazená, viditelně omlazená a bez známek jemných vrásek kůže. <br> Toto zážitkové ošetření je propojeno s masážními pomůckami, které působí na všechny akupresurní body a smysly, včetně speciální masáže štětci, masáže rukou a dalších relaxačních technik.
Díky nové složce HYDRO-BOOST doslova pri žíznivou pleť Vaše pokožka okamžite pocítí intenzivní hydrataci. <br>
Výsledkem je maximálně vyhlazená kůže,viditelně omlazená ,vyplá a bez známek jemných vrásek. <br><br>
<span class='strong-b'>Tohle zážitkové ošetření je propojené masážními pomůckami,které působí na všechny akupresurní body a zmysly”,speciální masáž štetcami,masáž rúk.</span>
" />

            <ServiceItem title="RETINOL TRIPLE A" price="2.490,-Kč / 90 min" description="RETINOL TRIPLE A je ošetření s inovativním trojitým retinolem v nejvyšší možné koncentraci pro dosažení vysoce účinného protivráskového efektu pleti a dekoltu. Toto unikátní ošetření s nejvyšší koncentrací vitamínu A (vitamín mládí) je vynikající v boji s vráskami a ztrátou elasticity pleti." />

            <ServiceItem title="FOREST Ritual" price="2.790,-Kč / 90 min" description="FOREST Ritual vás zve k procházce lesem v ošetření PHYRIS s pleťovou řadou FoRest. Toto smyslné rituálové ošetření pleti vás nadchne zážitkem vůní lesa, muzikoterapie, dotykem a speciální masáží, která vám umožní vypnout od okolního uponáhlaného světa. Výsledkem bude krásná, rozzářená a odpočinutá pleť, stejně jako relaxace mysli. <br> Použité masážní pomůcky zahrnují Guasha, ledovou masáž očního okolí žlutými tyčinkami a masáž štětci." />

            <ServiceItem :is-last="true" title="SPICEup Ritual Intense" price="2.790,-Kč /  90 min" description="SPICEup Ritual Intense je podzimní, teplé a vícesmyslové SPA rituál ošetření s tajemnou sílou exotického koření, který dodá vaší pleti vitalitu, energii a mládí. Během rituálu je pokožka ošetřována speciální masáží podporující mikrocirkulaci, která zanechá pleť hydratovanou, vypnutou a plnou energie. <br> Tento SPA rituál je navržen pro ty, kteří touží po dokonalém balancu mezi profesionální péčí o pleť a smyslovým zážitkem. Omlazuje, oživuje, zklidňuje a zanechá pleť zářivou, zdravou a nádherně vyživenou.
" />


          </div>
        </div>


      </div>
    </section>

    <AdditionalServices />

    <section class="mt-5">
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <ServiceItem title="SEE CHANGE - COLAGEN Omlazení" price="2.790,-Kč / 90 min" description="SEE CHANGE - COLAGEN Omlazení využívá široké spektrum mořských řas, které zklidňují pokožku, zvyšují její regeneraci a intenzivně hydratují. Díky produktům See Change je možné posunout pevnost a syntézu kolagenu v kůži. Toto ošetření je ideální jak pro letní hydrataci, tak pro zimní období, kde je použit mořský kolagen s vitamínem C pro zvýšení pevnosti a rozzáření kůže.
" />

            <ServiceItem title="PERFECT AGE – Omlazující Ošetření s Kmenovými Buňkami" price="2.790,-Kč / 90 min" description="PERFECT AGE je unikátní anti-aging ošetření s kmenovými buňkami, ideální pro prevenci a dosažení nadčasové krásy pleti. Vysoce účinné látky v kombinaci s kmenovými buňkami z rozkvetlé jabloně, mandlí, peptidů a liftingovou masáží okamžitě zjemňují, omlazují a vypínají vaši pleť.
"></ServiceItem>

            <ServiceItem title="LUXESSE GLOW TAHITS PEARLS “RITUAL”" price="3.700,-Kč / 120 min" description="LUXESSE GLOW TAHITS PEARLS “RITUAL” je exkluzivní VIP ošetření propojené s Rituálem Tina Poda, které vás nadchne už od prvního nádechu vůně řady Luxesse. Tento rituál zahrnuje luxusní produkty nejvyšší řady Luxesse Phyris, napojení terapeuta s klientem a zážitkové ošetření plné masážních tahů nejen rukama, ale i štětci, zlatými masážními lžícemi a oční bodovou masáží kovovými tyčinkami. Sklenička při příchodu a třísložkový efekt v boji proti stárnutí poskytují okamžité výsledky v hlubších vrstvách pleti.
"></ServiceItem>

            <ServiceItem :is-last="true" title="ANTI Pigment “RITUAL” MANSARD" price="2.790,-Kč / 90 min" description="ANTI Pigment “RITUAL” MANSARD je vysoce účinné antipigmentační ošetření zaměřené na odstranění existujících pigmentů a zabránění tvorbě nových pigmentových skvrn. Toto ošetření nejenže dopřává vaší pleti odpočinek, ale také zajišťuje rozzářenou a přesvětlenou pleť. Opakováním těchto procedur dosáhnete ještě silnějšího a dlouhodobějšího efektu.  
"></ServiceItem>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="img-wrapper mb-5 mt-5">
              <img class="ann-about-img img-fluid" src="/img/s112.webp" alt="FOREST Ritual – smyslné rituálové ošetření pleti">
            </div>



          </div>
        </div>

        <div class="row">
          <div class="m-5"></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import ServiceItem from '~/components/service-item.vue';
useHead({
  title: 'Služby – Profesionální Kosmetické Ošetření a Omlazení Pleti | Váš Beauty Expert na Krásu',
  description: 'Objevte širokou škálu profesionálních kosmetických služeb od Tina Poda | Beauty Expert na Krásu. Nabízíme omlazení a hydrataci pleti, anti-aging ošetření, retinol procedury, luxusní rituály a další exkluzivní péče o pleť. Rezervujte si svůj termín ještě dnes!',
  image: 'https://tinapoda.beauty/img/s111.webp',
  url: 'https://tinapoda.beauty/sluzby/ritualy',

})

useSeoMeta({
  title: 'Služby – Profesionální Kosmetické Ošetření a Omlazení Pleti | Váš Beauty Expert na Krásu',
  description: 'Objevte širokou škálu profesionálních kosmetických služeb od Tina Poda | Beauty Expert na Krásu. Nabízíme omlazení a hydrataci pleti, anti-aging ošetření, retinol procedury, luxusní rituály a další exkluzivní péče o pleť. Rezervujte si svůj termín ještě dnes!',
  image: 'https://tinapoda.beauty/img/s111.webp',
  url: 'https://tinapoda.beauty/sluzby/ritualy',
  ogTitle: 'Služby – Profesionální Kosmetické Ošetření a Omlazení Pleti | Váš Beauty Expert na Krásu',
  ogDescription: 'Objevte širokou škálu profesionálních kosmetických služeb od Tina Poda | Beauty Expert na Krásu. Nabízíme omlazení a hydrataci pleti, anti-aging ošetření, retinol procedury, luxusní rituály a další exkluzivní péče o pleť. Rezervujte si svůj termín ještě dnes!',
  ogImage: 'https://tinapoda.beauty/img/s111.webp',
  ogUrl: 'https://tinapoda.beauty/sluzby/ritualy',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Tina Poda Váš Beauty Expert na Krásu',
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
            "name": "AQUActive HYALURON Intensive",
            "description": "Unikátní ošetření pleti s 5 druhy kyseliny hyaluronové poskytující intenzivní hydrataci a omlazení pleti.",
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2490.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2490.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "3700.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
            "image": "https://tinapoda.beauty/img/s111.webp",
            "offers": {
              "@type": "Offer",
              "price": "2790.00",
              "priceCurrency": "CZK",
              "url": "https://tinapoda.beauty/sluzby/ritualy",
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
        }
      ]
    }
  });
  document.head.appendChild(script);
});

</script>