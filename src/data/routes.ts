// Güzergahlar: Ege, Marmara ve Ankara. Her kayıt bir sayfa üretir: /izmir-{slug}-frigorifik-nakliye/
// Mesafeler yaklaşıktır; yayından önce firma tarafından kontrol edilmeli.
// Yeni il eklemek için bu diziye bir kayıt eklemek yeterli.

export type Region = 'Ege' | 'Marmara' | 'İç Anadolu';

export interface Route {
  slug: string;
  city: string;
  /** "Ankara'ya" */
  dat: string;
  /** "Ankara'dan" */
  abl: string;
  region: Region;
  km: number;
  road: string;
  lat: number;
  lng: number;
  /** İzmir'den bu ile giden yükler hakkında */
  outbound: string;
  /** Bu ilden İzmir'e gelen yükler hakkında */
  inbound: string;
  outLoads: string[];
  inLoads: string[];
  areas: string[];
}

export const routes: Route[] = [
  {
    slug: 'manisa', city: 'Manisa', dat: "Manisa'ya", abl: "Manisa'dan", region: 'Ege',
    km: 40, road: 'Sabuncubeli Tüneli üzerinden', lat: 38.61, lng: 27.43,
    outbound: "Manisa en yakın hattımız. Manisa OSB'deki gıda fabrikaları ile İzmir'deki depolar arasında aynı gün yükleme ve teslim planlanabiliyor.",
    inbound: "Manisa'dan İzmir'e çekirdeksiz üzüm, Turgutlu ve Salihli sebzesi ve fabrika çıkışı donuk ürün taşıyoruz. İzmir Limanı'na giden ihracat yükleri de bu hatta.",
    outLoads: ['Hammadde meyve ve sebze', 'Süt ürünleri', 'Depolar arası donuk ürün'],
    inLoads: ['Çekirdeksiz üzüm ve kuru üzüm', 'Sebze (Turgutlu, Salihli)', 'Fabrika çıkışı dondurulmuş gıda', 'Zeytin (Akhisar)'],
    areas: ['Manisa OSB', 'Turgutlu', 'Akhisar', 'Salihli', 'Saruhanlı', 'Alaşehir'],
  },
  {
    slug: 'aydin', city: 'Aydın', dat: "Aydın'a", abl: "Aydın'dan", region: 'Ege',
    km: 110, road: 'O-31 İzmir–Aydın otoyolu', lat: 37.85, lng: 27.85,
    outbound: "Aydın'daki soğuk hava depolarına ve Kuşadası–Didim hattındaki otellere donuk ve soğuk ürün taşıyoruz. Sezonda otel tedarikçileri için sabah erken teslim planlıyoruz.",
    inbound: "Aydın'dan İzmir'e incir, kestane, zeytin ve sebze taşıyoruz. Taze incir gibi hassas ürünlerde aracı yüklemeden önce istenen sıcaklığa indiriyoruz.",
    outLoads: ['Donuk et, tavuk ve deniz ürünü (otel tedariki)', 'Dondurma', 'Süt ürünleri'],
    inLoads: ['İncir (taze ve kuru)', 'Kestane', 'Zeytin ve zeytinyağı', 'Sebze'],
    areas: ['Nazilli', 'Söke', 'Kuşadası', 'Didim', 'İncirliova', 'Germencik'],
  },
  {
    slug: 'balikesir', city: 'Balıkesir', dat: "Balıkesir'e", abl: "Balıkesir'den", region: 'Marmara',
    km: 180, road: 'O-5 İzmir–İstanbul otoyolu', lat: 39.65, lng: 27.88,
    outbound: "Balıkesir'deki et ve süt işleme tesislerine İzmir'den düzenli sefer yapıyoruz. Bandırma ve Gönen'e giden yükler için otoyol bağlantısı yolu kısaltıyor.",
    inbound: "Balıkesir'den İzmir'e tavuk ürünleri, yumurta, süt ürünleri ve Edremit Körfezi zeytinyağı taşıyoruz.",
    outLoads: ['Su ürünleri', 'Dondurulmuş sebze', 'Kuru gıda'],
    inLoads: ['Tavuk ürünleri', 'Yumurta', 'Süt ürünleri ve peynir', 'Zeytinyağı'],
    areas: ['Balıkesir OSB', 'Bandırma', 'Gönen', 'Edremit', 'Ayvalık', 'Susurluk'],
  },
  {
    slug: 'usak', city: 'Uşak', dat: "Uşak'a", abl: "Uşak'tan", region: 'Ege',
    km: 210, road: 'D300, Salihli üzerinden', lat: 38.68, lng: 29.41,
    outbound: "Uşak, Ankara seferleriyle aynı yol üzerinde. Bu yüzden Uşak'a giden parsiyel yükleri bu seferlerle kolayca birleştiriyoruz.",
    inbound: "Uşak'tan İzmir'e süt ürünleri, et ürünleri ve tarhana gibi yöresel kuru gıda taşıyoruz.",
    outLoads: ['Su ürünleri', 'Donuk ürün', 'Kuru gıda'],
    inLoads: ['Süt ürünleri', 'Et ürünleri', 'Tarhana ve yöresel kuru gıda'],
    areas: ['Uşak OSB', 'Banaz', 'Eşme', 'Sivaslı', 'Ulubey'],
  },
  {
    slug: 'mugla', city: 'Muğla', dat: "Muğla'ya", abl: "Muğla'dan", region: 'Ege',
    km: 220, road: 'Aydın–Milas üzerinden', lat: 37.22, lng: 28.36,
    outbound: "Muğla hattı yaz sezonunda Bodrum, Marmaris ve Fethiye otellerine donuk ve soğuk ürün taşımacılığıyla yoğunlaşıyor.",
    inbound: "Muğla'dan İzmir'e Milas ve Bodrum çiftliklerinden levrek ve çipura, Fethiye ve Ortaca'dan sebze taşıyoruz.",
    outLoads: ['Donuk et ve tavuk (otel tedariki)', 'Süt ürünleri', 'Dondurma', 'Kuru gıda'],
    inLoads: ['Levrek ve çipura', 'Sebze (Fethiye, Ortaca)', 'Çam balı', 'Narenciye'],
    areas: ['Bodrum', 'Marmaris', 'Fethiye', 'Milas', 'Dalaman', 'Menteşe'],
  },
  {
    slug: 'denizli', city: 'Denizli', dat: "Denizli'ye", abl: "Denizli'den", region: 'Ege',
    km: 230, road: 'O-31 ve Nazilli üzerinden', lat: 37.78, lng: 29.09,
    outbound: "Denizli yakın hatlarımızdan. Sabah yüklenen araç çoğunlukla aynı gün Denizli'deki depoya ulaşıyor.",
    inbound: "Denizli'den İzmir'e süt ürünleri, et ürünleri ve bölgenin üzümünü taşıyoruz. İzmir Limanı'ndan ihraç edilecek yükleri de bu hatta alıyoruz.",
    outLoads: ['Su ürünleri', 'Donuk et ve tavuk', 'Kuru gıda'],
    inLoads: ['Süt ürünleri ve peynir', 'Et ürünleri', 'Üzüm ve meyve', 'Sebze'],
    areas: ['Denizli OSB', 'Merkezefendi', 'Pamukkale', 'Honaz', 'Sarayköy', 'Çivril'],
  },
  {
    slug: 'canakkale', city: 'Çanakkale', dat: "Çanakkale'ye", abl: "Çanakkale'den", region: 'Marmara',
    km: 330, road: 'Balıkesir–Edremit–Ayvacık üzerinden', lat: 40.15, lng: 26.41,
    outbound: "Çanakkale'deki depolara, Biga ve Çan çevresindeki gıda işletmelerine İzmir'den düzenli yük götürüyoruz. Yaz sezonunda Gelibolu ve Eceabat yönü de çalıştığımız hatlardan.",
    inbound: "Çanakkale'den İzmir'e Ezine peyniri, deniz ürünleri, zeytinyağı ve Biga çevresinin sebzesini taşıyoruz.",
    outLoads: ['Dondurulmuş sebze ve meyve', 'Süt ürünleri', 'Kuru gıda'],
    inLoads: ['Peynir ve süt ürünleri (Ezine)', 'Su ürünleri', 'Zeytinyağı', 'Sebze ve meyve'],
    areas: ['Çanakkale merkez', 'Biga', 'Çan', 'Ezine', 'Gelibolu', 'Lapseki'],
  },
  {
    slug: 'kutahya', city: 'Kütahya', dat: "Kütahya'ya", abl: "Kütahya'dan", region: 'Ege',
    km: 340, road: 'D300, Uşak üzerinden', lat: 39.42, lng: 29.98,
    outbound: "Kütahya'ya giden yükler Uşak ve Ankara hattıyla aynı koridordan gidiyor. Bu sayede parsiyel yükleri diğer seferlerle birleştirebiliyoruz.",
    inbound: "Kütahya'dan İzmir'e süt ürünleri, et ürünleri, bölgenin meyve ve sebzesini taşıyoruz.",
    outLoads: ['Su ürünleri', 'Dondurulmuş sebze', 'Zeytin ve zeytinyağı'],
    inLoads: ['Süt ürünleri', 'Et ürünleri', 'Meyve ve sebze'],
    areas: ['Kütahya OSB', 'Tavşanlı', 'Simav', 'Gediz', 'Emet'],
  },
  {
    slug: 'afyonkarahisar', city: 'Afyonkarahisar', dat: "Afyonkarahisar'a", abl: "Afyonkarahisar'dan", region: 'Ege',
    km: 330, road: 'D300, Uşak üzerinden', lat: 38.76, lng: 30.54,
    outbound: "Afyonkarahisar, İzmir–Ankara hattının üzerinde. Bu nedenle parsiyel yük birleştirmeye en uygun illerimizden biri; küçük yükler de düzenli seferlerle gidiyor.",
    inbound: "Afyonkarahisar'dan İzmir'e sucuk, kaymak, süt ürünleri ve sezonunda kiraz ve vişne taşıyoruz.",
    outLoads: ['Su ürünleri', 'Zeytinyağı', 'Dondurulmuş sebze'],
    inLoads: ['Sucuk ve et ürünleri', 'Kaymak ve süt ürünleri', 'Kiraz ve vişne'],
    areas: ['Afyonkarahisar OSB', 'Sandıklı', 'Dinar', 'Bolvadin', 'Şuhut', 'Emirdağ'],
  },
  {
    slug: 'bursa', city: 'Bursa', dat: "Bursa'ya", abl: "Bursa'dan", region: 'Marmara',
    km: 330, road: 'O-5 İzmir–İstanbul otoyolu', lat: 40.19, lng: 29.06,
    outbound: "Bursa, Marmara'nın gıda sanayi merkezlerinden biri. Otoyol sayesinde İzmir'den çıkan yük Nilüfer ve Kestel'deki depolara kısa sürede ulaşıyor.",
    inbound: "Bursa'dan İzmir'e dondurulmuş sebze, süt ürünleri, tavuk ve Bursa ovasının şeftali ve kirazını taşıyoruz.",
    outLoads: ['Su ürünleri', 'Zeytinyağı ve kuru gıda', 'Süt ürünleri ve peynir', 'Dondurulmuş hamur ürünleri'],
    inLoads: ['Dondurulmuş sebze', 'Şeftali ve kiraz (serin taşıma)', 'Süt ürünleri', 'Tavuk ürünleri'],
    areas: ['Nilüfer OSB', 'Kestel OSB', 'Demirtaş OSB', 'İnegöl', 'Mustafakemalpaşa', 'Gemlik'],
  },
  {
    slug: 'yalova', city: 'Yalova', dat: "Yalova'ya", abl: "Yalova'dan", region: 'Marmara',
    km: 390, road: 'O-5 otoyolu ve Osmangazi Köprüsü', lat: 40.65, lng: 29.27,
    outbound: "Yalova'ya Osmangazi Köprüsü üzerinden ulaşıyoruz. Altınova ve Çınarcık çevresindeki depolara ve otellere donuk ve soğuk ürün götürüyoruz.",
    inbound: "Yalova'dan İzmir'e bölgenin süt ürünleri, sebzesi ve fabrika çıkışı paketli gıdasını taşıyoruz.",
    outLoads: ['Donuk et ve tavuk', 'Süt ürünleri', 'Dondurma'],
    inLoads: ['Süt ürünleri', 'Sebze ve meyve', 'Paketli gıda'],
    areas: ['Yalova merkez', 'Altınova', 'Çınarcık', 'Çiftlikköy', 'Armutlu'],
  },
  {
    slug: 'bilecik', city: 'Bilecik', dat: "Bilecik'e", abl: "Bilecik'ten", region: 'Marmara',
    km: 410, road: 'Bursa ve İnegöl üzerinden', lat: 40.15, lng: 29.98,
    outbound: "Bilecik'e giden yükler Bursa hattıyla aynı koridordan gidiyor. Bozüyük ve Osmaneli çevresindeki depolara ve fabrikalara teslim yapıyoruz.",
    inbound: "Bilecik'ten İzmir'e süt ürünleri, et ürünleri ve yöresel kuru gıda taşıyoruz.",
    outLoads: ['Su ürünleri', 'Dondurulmuş sebze', 'Zeytinyağı ve kuru gıda'],
    inLoads: ['Süt ürünleri', 'Et ürünleri', 'Yöresel kuru gıda'],
    areas: ['Bilecik merkez', 'Bozüyük', 'Osmaneli', 'Söğüt', 'Gölpazarı'],
  },
  {
    slug: 'tekirdag', city: 'Tekirdağ', dat: "Tekirdağ'a", abl: "Tekirdağ'dan", region: 'Marmara',
    km: 430, road: 'Çanakkale üzerinden, 1915 Çanakkale Köprüsü', lat: 40.98, lng: 27.51,
    outbound: "Tekirdağ'a 1915 Çanakkale Köprüsü üzerinden gidiyoruz, İstanbul trafiğine girmiyoruz. Çerkezköy ve Çorlu'daki gıda fabrikaları bu hattın ana teslim noktaları.",
    inbound: "Tekirdağ'dan İzmir'e süt ürünleri, et ve tavuk, ayçiçek yağı ve fabrika çıkışı paketli gıda taşıyoruz.",
    outLoads: ['Su ürünleri', 'Meyve ve sebze', 'Zeytinyağı'],
    inLoads: ['Süt ürünleri', 'Et ve tavuk', 'Paketli gıda', 'Ayçiçek yağı'],
    areas: ['Çerkezköy OSB', 'Çorlu', 'Ergene', 'Süleymanpaşa', 'Malkara', 'Kapaklı'],
  },
  {
    slug: 'kocaeli', city: 'Kocaeli', dat: "Kocaeli'ne", abl: "Kocaeli'nden", region: 'Marmara',
    km: 440, road: 'O-5 otoyolu ve Osmangazi Köprüsü', lat: 40.77, lng: 29.94,
    outbound: "Kocaeli'deki gıda fabrikalarına ve Gebze–Dilovası lojistik depolarına İzmir'den düzenli sevkiyat yapıyoruz. Osmangazi Köprüsü ile körfezi dolaşmadan geçiyoruz.",
    inbound: "Kocaeli'nden İzmir'e dönüşte fabrika çıkışı paketli gıda, dondurulmuş hazır ürün ve şekerleme alıyoruz.",
    outLoads: ['Hammadde meyve ve sebze', 'Süt ürünleri', 'Zeytinyağı', 'Su ürünleri'],
    inLoads: ['Paketli gıda', 'Dondurulmuş hazır ürün', 'İçecek ve kuru gıda', 'Şekerleme'],
    areas: ['Gebze OSB', 'Dilovası', 'Çayırova', 'Kartepe', 'İzmit', 'Derince Limanı'],
  },
  {
    slug: 'sakarya', city: 'Sakarya', dat: "Sakarya'ya", abl: "Sakarya'dan", region: 'Marmara',
    km: 480, road: 'O-5 otoyolu ve Osmangazi Köprüsü', lat: 40.76, lng: 30.4,
    outbound: "Sakarya'ya Osmangazi Köprüsü ve otoyol üzerinden gidiyoruz. Adapazarı, Arifiye ve Hendek'teki fabrika ve depolara teslim yapıyoruz.",
    inbound: "Sakarya'dan İzmir'e fabrika çıkışı paketli gıda, süt ürünleri ve sezonunda fındık ile sebze taşıyoruz.",
    outLoads: ['Su ürünleri', 'Zeytinyağı ve kuru gıda', 'Dondurulmuş sebze'],
    inLoads: ['Paketli gıda', 'Süt ürünleri', 'Sebze', 'Fındık'],
    areas: ['Adapazarı', 'Arifiye', 'Hendek', 'Sapanca', 'Akyazı', 'Sakarya OSB'],
  },
  {
    slug: 'istanbul', city: 'İstanbul', dat: "İstanbul'a", abl: "İstanbul'dan", region: 'Marmara',
    km: 480, road: 'O-5 İzmir–İstanbul otoyolu, Osmangazi Köprüsü', lat: 41.01, lng: 28.98,
    outbound: "İstanbul en yoğun hattımız. Yükü akşam yola çıkarıp sabah Anadolu ve Avrupa yakasındaki depolara, trafik yoğunlaşmadan teslim edecek şekilde planlıyoruz.",
    inbound: "İstanbul'dan İzmir'e dönüşte limandan çıkan ithal donuk ürün, şarküteri ve zincir market depolarının Ege sevkiyatlarını taşıyoruz.",
    outLoads: ['Dondurulmuş sebze ve meyve', 'Zeytin, zeytinyağı ve kuru gıda', 'Süt ürünleri ve peynir', 'Levrek ve çipura'],
    inLoads: ['İthal donuk ürün (liman ve antrepo çıkışı)', 'Şarküteri ve et ürünleri', 'Dondurma ve pastane ürünleri', 'Market zinciri depo sevkiyatları'],
    areas: ['Tuzla', 'Sancaktepe', 'İkitelli OSB', 'Hadımköy', 'Esenyurt', 'Ambarlı Limanı'],
  },
  {
    slug: 'edirne', city: 'Edirne', dat: "Edirne'ye", abl: "Edirne'den", region: 'Marmara',
    km: 590, road: '1915 Çanakkale Köprüsü ve Tekirdağ üzerinden', lat: 41.68, lng: 26.56,
    outbound: "Edirne'ye Çanakkale Köprüsü ve Tekirdağ üzerinden gidiyoruz. Merkez, Keşan ve Uzunköprü çevresindeki depolara ve işletmelere teslim yapıyoruz.",
    inbound: "Edirne'den İzmir'e süt ürünleri, Edirne tava ciğeri ve et ürünleri, ayçiçek yağı ve Trakya ovasının sebzesini taşıyoruz.",
    outLoads: ['Su ürünleri', 'Zeytin ve zeytinyağı', 'Dondurulmuş sebze', 'Meyve'],
    inLoads: ['Süt ürünleri', 'Et ürünleri', 'Ayçiçek yağı', 'Sebze'],
    areas: ['Edirne merkez', 'Keşan', 'Uzunköprü', 'Havsa', 'Lalapaşa', 'Kapıkule'],
  },
  {
    slug: 'kirklareli', city: 'Kırklareli', dat: "Kırklareli'ne", abl: "Kırklareli'nden", region: 'Marmara',
    km: 610, road: '1915 Çanakkale Köprüsü ve Tekirdağ üzerinden', lat: 41.74, lng: 27.23,
    outbound: "Kırklareli'ne Tekirdağ hattı üzerinden gidiyoruz. Lüleburgaz ve Babaeski çevresindeki depolara ve fabrikalara teslim yapıyoruz.",
    inbound: "Kırklareli'nden İzmir'e süt ürünleri, peynir, et ürünleri ve Trakya'nın meyve ve sebzesini taşıyoruz.",
    outLoads: ['Su ürünleri', 'Zeytinyağı ve kuru gıda', 'Dondurulmuş sebze'],
    inLoads: ['Süt ürünleri ve peynir', 'Et ürünleri', 'Meyve ve sebze'],
    areas: ['Kırklareli merkez', 'Lüleburgaz', 'Babaeski', 'Vize', 'Pınarhisar', 'Kofçaz'],
  },
  {
    slug: 'ankara', city: 'Ankara', dat: "Ankara'ya", abl: "Ankara'dan", region: 'İç Anadolu',
    km: 580, road: 'D300, Uşak–Afyonkarahisar üzerinden', lat: 39.93, lng: 32.86,
    outbound: "Ankara hattında başkentteki toptancı hali, zincir market bölge depoları ve kurumsal mutfaklar için yük taşıyoruz. Yol üzerindeki Uşak ve Afyonkarahisar'da ara teslim planlanabiliyor.",
    inbound: "Ankara'dan İzmir'e et ve tavuk ürünleri, işlenmiş gıda ve Ankara çevresindeki üreticilerin Ege dağıtımı için yük alıyoruz.",
    outLoads: ['Dondurulmuş sebze ve meyve', 'Taze sebze ve meyve (serin taşıma)', 'Su ürünleri', 'Zeytin ve kuru gıda'],
    inLoads: ['Kırmızı et ve tavuk ürünleri', 'Şarküteri', 'Donuk hamur ürünleri', 'Kuru gıda ve bakliyat'],
    areas: ['Sincan OSB', 'Ostim', 'Ankara Toptancı Hali', 'Temelli', 'Kazan', 'Esenboğa çevresi'],
  },
];
