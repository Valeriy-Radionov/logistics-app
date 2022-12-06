export type PagesDataType = {
  headerPages: string[]
  aboutUs: {
    title: string
    description: string
  }
  transportAndServices: {
    transportTitle: string
    transport: string[]
    servicesTitle: string
    services: string[]
  }
  transportationGoods: {
    title: string
    items: string[]
  }
  geography: {
    title: string
    description: string
  }
  transportation: {
    title: string
    value: string[]
  }
  insurance: {
    title: string
    description: string
    advantagesTitle: string
    advantagesText: string[]
  }
}

export const textDataEN = {
  EN(): PagesDataType {
    return {
      headerPages: ["Services", "Transportation of goods", "Insurance", "Contacts", "About us"],
      aboutUs: {
        title: "Logistic company",
        description:
          " provides a full range of logistics services. We support industry and commerce by exchanging goods worldwide through land transport, worldwide air and sea freight.We are building a company on the basis of responsibility and long-term mutually beneficial relationships with partners",
      },
      transportAndServices: {
        transportTitle: "Transport solutions",
        transport: ["Road transportation", "Sea container transportation", "Rail transportation", "Multimodal transportation"],
        servicesTitle: "Services of the transport company RIDER",
        services: [
          "Full truck load transportation",
          "Carriage of consolidated cargo from Europe to the EAEU and Central Asia countries",
          "Carriage of oversize cargo",
          "Carriage of project cargo and exhibition equipment",
          "Carriage of dangerous goods (ADR) (classes 2,3,4,5,6,8,9)",
          "Carriage of high-value goods under Customs carrier license",
          "Freight forwarding (including containers and temperature controlled freights)",
          "Supplementary insurance and custom processing of cargo",
          "Customs services",
        ],
      },
      transportationGoods: {
        title: "Variety of transported cargo by industry",
        items: [
          "Food industry",
          "Consumer goods industry",
          "Chemical industry",
          "Machine construction",
          "Construction industry",
          "Cosmetics and perfumery",
          "Equipment and tools",
          "Metals and metal products",
          "Appliances and electronics",
          "Various industrial products",
        ],
      },
      geography: {
        title: "Geography of road transportations",
        description: "Europe, Asia – Russia, Belarus, Ukraine, Kazakhstan, other CIS countries (imports, exports),between the European countries, between the CIS countries (the EAEU, Ukraine, etc.)",
      },
      transportation: {
        title: "Transportation",
        value: ["OVERSIZE CARGO", "DANGEROUS CARGO", " PROJECT CARGO", "GROUPAGE CARGO"],
      },
      insurance: {
        title: "Cargo Insurance with RIDER",
        description:
          'RIDER renders cargo insurance services to its customers on the following terms – "Responsibility for any risk". This type of insurance guarantees assured compensation for damage to or loss of the cargo in any case and at any stage of transportation. We especially recommend this type of insurance to owners of valuable and highly liquid cargoes as well as for the cargoes at high risk of damage due to certain characteristics of the cargo (perishable and hazardous goods, cargoes requiring special temperature conditions, fragile packing, etc.).',
        advantagesTitle: "The major advantages of cargo insurance with RIDER",
        advantagesText: [
          "Low rates",
          "Cargo insurance at any stage of transportation",
          "Efficiency while preparing the insurance policy",
          "Well-organized settlement of insured events",
          "Assistance with damage survey procedures and settlement of claims",
          "Quick payment of an insured amount",
        ],
      },
    }
  },
}

export const textDataPL = {
  PL(): PagesDataType {
    return {
      headerPages: ["Usługi", "Transport towarów", "Ubezpieczenie", "Łączność", "O nas"],
      aboutUs: {
        title: "Firma logistyczna",
        description:
          " zapewnia pełny kompleks logistycznych usług. My wspieramy przemysł i handel, realizując światową wymiane towarów transportem naziemnym, światowym powietrznym i morskim. My budujemy firme na bazie odpowiedzialnosci i długoterminowej współpracy z naszymi partnerami",
      },
      transportAndServices: {
        transportTitle: "Rodzaje transportu",
        transport: ["Transport drogowy", "Przewozy morskie", "Kolejowe przewozy", "Multimodalne przewozy"],
        servicesTitle: "SUsługi firmy transportowej Rider",
        services: [
          "Full truck load transportation",
          "Prewóz standardowych ładunków",
          "Przewóz ładunków drobnych",
          "Przewóz ładunków ponadgabarytowych",
          "Transport ładunków projektowych ",
          "Przewóz ładunków niebezpiecznych (ADR)  (klasa 2,3,4,5,6,8,9)",
          "Przewóz towarów o dużej wartości pod kontrolą celną",
          "Spedycja transportowa (włącznie z kontenerami i ładunków, wymagając przewozu z temperaturą)",
          "Dodatkowe ubezpieczenie i celne deklarowanie dla własnego transportu.",
          "Usługi celne i magazynowanie",
        ],
      },
      transportationGoods: {
        title: "Usługi firmy transportowej RIDER",
        items: [
          "Przemysł spożywczy",
          "Przemysł lekki",
          "Przemysł chemiczny",
          "Inżynieria mechaniczna",
          "Przemysł budowlany",
          "Kosmetyki i perfumy",
          "Sprzęt i narzędzia",
          "Metale i wyroby metalowe",
          "Technika i elektronika",
          "Dobra konsumpcyjne",
        ],
      },
      geography: {
        title: "Geografia przewozów",
        description: "Przewozy importowo - eksportowe: kraje Europy, Skandynawii, Bałtyckie, Bliskiego Wschodu, Azji, Dalekiego Wschodu, Ameryki– kraje Euroazjatyckiej Unii Gospodarczej, Ukraina",
      },
      transportation: {
        title: "Żegluga",
        value: ["ŁADUNEK PONADGABARYTOWY", "ŁADUNEK NIEBEZPIECZNY", " RZUTOWAĆ ŁADUNEK", "ŁADUNEK ZGRUPOWANE"],
      },
      insurance: {
        title: "Ubezpieczenie ładunków z RIDER",
        description:
          "RIDER oferuje swoim Klientom usługę ubezpieczenia ładunków na bazie wszystkich ryzyk. Ten rodzaj ubezpieczenia zapewnia GWARANTOWANE odszkodowanie w przypadku uszkodzenia lub utraty ładunku w każdych okolicznościach i na wszystkich etapach transportu. Szczególnie polecamy ten rodzaj ubezpieczenia właścicielom wysokowartościowych oraz szybkozbywalnych ładunków, jak również wtedy, kiedy istnieje wysokie ryzyko uszkodzenia ładunku ze względu na jego właściwości (ładunki szybkopsujące się, niebezpieczne, kruche, wymagające temperatury kontrolowanej itp.).",
        advantagesTitle: "Korzyści z ubezpieczenia ładunków z RIDER",
        advantagesText: [
          "Niskie stawki (poznać koszt ubezpieczenia ładunku w RIDER można już teraz po wypełnieniu formularza wyceny)",
          "Ubezpieczenie ładunków na dowolnym etapie transportu",
          "Szybkość wystawienia polisy ubezpieczeniowej",
          "Sprawnie działający system likwidacji szkód",
          "Pomoc przy organizacji oględzin uszkodzonego ładunku i załatwieniu reklamacji",
          "Szybka wypłata odszkodowania",
        ],
      },
    }
  },
}
export const textDataRU = {
  RU(): PagesDataType {
    return {
      headerPages: ["Услуги", "Транспортировка товаров", "Страхование", "Контакты", "О нас"],
      aboutUs: {
        title: "Логистическая компания",
        description:
          " предоставляет полный комплекс логистических услуг. Мы поддерживаем промышленность и торговлю, осуществляя всемирный обмен товарами посредством наземного транспорта, всемирных воздушных и морских грузоперевозок. Мы строим компанию на базе ответственности и долгосрочных взаимовыгодных отношениях с партнёрами",
      },
      transportAndServices: {
        transportTitle: "Виды транспорта",
        transport: ["Автомобильные перевозки", "Морские контейнерные перевозки", "Железнодорожные перевозки", "Мультимодальные перевозки", "Авиа перевозки"],
        servicesTitle: "Услуги транспортной компании RIDER",
        services: [
          "Перевозка стандартных комплектных грузов",
          "Перевозка сборных грузов",
          "Перевозка негабаритных грузов",
          "Перевозка проектных грузов и выставочного оборудования",
          "Перевозка опасных (ADR) грузов (классов 2,3,4,5,6,8,9)",
          "Перевозка дорогостоящих грузов под таможенным контролем",
          "Транспортное экспедирование (в том числе контейнеров и грузов, требующих температурного режима)",
          "Дополнительное страхование и таможенное декларирование для собственного транспорта.",
          "Таможенные и складские услуги",
        ],
      },
      transportationGoods: {
        title: "RIDER специализируется на перевозкe (FTL) следующих категорий товаров",
        items: [
          "Продукты питания и морепродукты",
          "Подакцизные товары",
          "Товары повседневного спроса (FMCG)",
          "Фармацевтическая продукция",
          "Электроника",
          "Автомобильные и промышленные детали",
          "Розничные товары",
        ],
      },
      geography: {
        title: "Сеть маршрутов",
        description:
          "RIDER доставляет грузы (FTL) в любую точку Европы, Скандинавии, в Россию, Казахстан и другие страны СНГ, а также в Центральную Азию, в том числе в Китай. Широкая сеть маршрутов позволяет нам выполнять бесперебойные перевозки, гарантировать качество, безопасность и своевременные доставки грузов",
      },
      transportation: {
        title: "ПЕРЕВОЗКИ",
        value: ["НЕГАБАРИТНЫЕ ГРУЗЫ", "ОПАСНЫЕ ГРУЗЫ", " ПРОЕКТНЫЕ ГРУЗЫ", "СБОРНЫЕ ГРУЗЫ"],
      },
      insurance: {
        title: "Страхование грузов с RIDER",
        description:
          "RIDER оказывает своим клиентам услуги по страхованию грузов на следующих условиях – «Ответственность за любой риск». Этот вид страхования гарантирует гарантированное возмещение ущерба или утраты груза в любом случае и на любом этапе перевозки. Особенно рекомендуем этот вид страхования владельцам ценных и высоколиквидных грузов, а также для грузов с высоким риском повреждения в силу определенных особенностей груза (скоропортящиеся и опасные грузы, грузы, требующие особого температурного режима, хрупкая упаковка и т.п.",
        advantagesTitle: "Основные преимущества страхования грузов с RIDER",
        advantagesText: [
          "Низкие ставки",
          "Страхование грузов на любом этапе перевозки",
          "Оперативность при оформлении страхового полиса",
          "Правильно организованное урегулирование страховых случаев",
          "Помощь в процедурах оценки ущерба и урегулировании претензий",
          "Быстрая выплата страховой суммы",
        ],
      },
    }
  },
}
