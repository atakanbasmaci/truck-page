export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Kısa ad: menü ve kartlarda */
  name: string;
  h1: string;
  title: string;
  description: string;
  /** Sıcaklık aralığı; parsiyel/komple için yok */
  temp?: { min: number; max: number; label: string };
  intro: string;
  /** Ana sayfadaki kısa özet */
  summary: string;
  products: string[];
  points: { title: string; text: string }[];
  faq: Faq[];
  /** WhatsApp mesajında yük tipi */
  loadWord: string;
}

export const services: Service[] = [
  {
    slug: 'donuk-gida-tasimaciligi',
    summary: 'Dondurulmuş et, tavuk, deniz ürünü, sebze, hamur işi ve dondurma. Araç yüklemeden önce istenen sıcaklığa soğutulur.',
    name: 'Donuk Gıda',
    h1: 'Donuk Gıda Taşımacılığı',
    title: 'Donuk Gıda Taşımacılığı İzmir, −18°C | ATA Taşımacılık',
    description:
      'İzmir çıkışlı ve İzmir varışlı donuk gıda taşımacılığı. −18°C frigorifik kamyonlarla et, tavuk, deniz ürünü, dondurma ve donuk sebze nakliyesi.',
    temp: { min: -18, max: -18, label: '−18°C' },
    intro:
      'Dondurulmuş ürün, soğuk zincirin en az hata kaldıran kısmı: birkaç derecelik yükselme bile ürünün raf ömrünü kısaltır. Araçlarımızı yüklemeden önce istenen sıcaklığa indiriyor, kapıyı yalnızca yükleme ve teslimde açıyoruz.',
    products: [
      'Dondurulmuş kırmızı et ve tavuk',
      'Deniz ürünleri',
      'Dondurulmuş sebze ve meyve',
      'Donuk hamur ve unlu mamul',
      'Dondurma ve donuk tatlı',
      'Hazır donuk yemek',
    ],
    points: [
      { title: 'Ön soğutma', text: 'Araç, yükleme noktasına istenen sıcaklıkta gelir. Sıcak kasaya donuk yük koymayız.' },
      { title: 'Kapalı kasa', text: 'Kasa kapısı yalnızca yükleme ve teslimde açılır; yolda kapalı kalır.' },
      { title: 'Palet ve istif', text: 'Soğuk havanın dolaşması için paletler duvara ve tavana dayanmadan istiflenir.' },
    ],
    faq: [
      {
        q: 'Donuk ürünü hangi sıcaklıkta taşıyorsunuz?',
        a: 'Donuk gıda için −18°C. Çoğu dondurulmuş ürünün saklama sıcaklığı budur. Daha düşük sıcaklık gerektiren bir ürününüz varsa yüklemeden önce bizi arayıp danışın.',
      },
      {
        q: 'Donuk ve soğuk yükü aynı araçta taşıyabilir misiniz?',
        a: 'Tek bölmeli araçta kasa tek sıcaklığa ayarlanır. İki farklı sıcaklık gerekiyorsa ayrı araç ya da uygun bir parsiyel plan öneriyoruz.',
      },
    ],
    loadWord: 'donuk',
  },
  {
    slug: 'soguk-zincir-nakliye',
    summary: 'Süt ürünleri, taze et, şarküteri, yumurta ve sebze-meyve. Kasa ürünün istediği değerde sabit tutulur.',
    name: 'Soğuk Zincir',
    h1: 'Soğuk Zincir Taşımacılığı',
    title: 'Soğuk Zincir Taşımacılığı İzmir, +2°C / +8°C | ATA Taşımacılık',
    description:
      'İzmir merkezli soğuk zincir nakliye: süt ürünleri, taze et, şarküteri ve sebze-meyve için +2°C / +8°C frigorifik kamyon. Komple ve parsiyel taşıma.',
    temp: { min: 2, max: 8, label: '+2°C / +8°C' },
    intro:
      'Taze ürün donmamalı ama ısınmamalı da. Süt ürünü, taze et ve şarküteri için kasayı dar bir aralıkta tutuyoruz; sebze ve meyvede ürünün istediği serinliğe göre ayar yapıyoruz.',
    products: [
      'Süt, yoğurt ve peynir',
      'Taze kırmızı et ve tavuk',
      'Şarküteri: sucuk, pastırma, salam',
      'Taze sebze ve meyve',
      'Yumurta',
      'Baklava ve pasta (serin taşıma)',
    ],
    points: [
      { title: 'Dar aralık', text: 'Kasa +2°C ile +8°C arasında, ürünün istediği değerde sabit tutulur.' },
      { title: 'Hızlı yükleme', text: 'Kapı açık kalma süresini kısa tutmak için yükleme saatini sizinle önceden netleştiriyoruz.' },
      { title: 'Temiz kasa', text: 'Gıda dışı yük taşımıyoruz. Kasa her yüklemeden önce temizlenir.' },
    ],
    faq: [
      {
        q: 'Sebze ve meyveyi de soğuk taşıyor musunuz?',
        a: 'Evet. Her ürünün ideal sıcaklığı farklıdır: yapraklı sebze çok serin, muz ve narenciye daha ılık ister. Ayarı ürüne göre yapıyoruz.',
      },
      {
        q: 'Süt ürünlerini parsiyel gönderebilir miyim?',
        a: 'Aynı sıcaklık aralığında başka yük varsa evet. Parsiyel sevkiyatta yükleme günü hattın doluluğuna göre belirlenir.',
      },
    ],
    loadWord: 'soğuk',
  },
  {
    slug: 'kuru-gida-nakliye',
    summary: 'Un, bakliyat, konserve, yağ, şekerleme ve içecek. Yalıtımlı kasa yükü sıcaktan ve nemden korur.',
    name: 'Kuru Gıda',
    h1: 'Kuru Gıda Taşımacılığı',
    title: 'Kuru Gıda Taşımacılığı İzmir | ATA Taşımacılık',
    description:
      'İzmir çıkışlı kuru gıda nakliyesi: un, bakliyat, konserve, yağ, şekerleme ve içecek. Frigorifik kasa sayesinde yaz sıcağında bile serin ve kuru taşıma.',
    temp: { min: 15, max: 25, label: '+15°C / +25°C' },
    intro:
      'Kuru gıda soğutma istemez ama sıcaktan ve nemden korunmalı. Yazın tente altında 50 dereceyi bulan kasada çikolata erir, yağ bozulur. Frigorifik aracımız kuru yükü de sabit, serin bir ortamda taşır.',
    products: [
      'Un, bulgur ve bakliyat',
      'Konserve ve salça',
      'Zeytinyağı ve sıvı yağ',
      'Şekerleme, çikolata, bisküvi',
      'İçecek',
      'Kuru meyve ve kuruyemiş',
    ],
    points: [
      { title: 'Sıcaktan koruma', text: 'Kasa sıcaklığı yaz aylarında da istenen değerde tutulur; ürün ısınmaz.' },
      { title: 'Nemden koruma', text: 'Kapalı, yalıtımlı kasa yağmurda ve nemli havada yükü kuru tutar.' },
      { title: 'Dönüş yükü avantajı', text: 'Kuru yükü soğuk yük seferlerinin dönüşüne denk getirebildiğimizde fiyat avantajı olabilir.' },
    ],
    faq: [
      {
        q: 'Kuru gıda için neden frigorifik araç?',
        a: 'Çikolata, yağ ve bazı paketli ürünler sıcakta bozulur. Frigorifik kasa soğutmanın yanında sıcaklığı sabit tuttuğu için yazın bu ürünleri korur.',
      },
    ],
    loadWord: 'kuru gıda',
  },
  {
    slug: 'parsiyel-ve-komple-arac',
    summary: 'Birkaç paletlik yükler parsiyel, büyük veya acil yükler komple araçla taşınır. Ara teslim planlanabilir.',
    name: 'Parsiyel / Komple',
    h1: 'Parsiyel ve Komple Araç Taşımacılığı',
    title: 'Parsiyel ve Komple Araç Taşımacılığı İzmir | ATA Taşımacılık',
    description:
      'İzmir çıkışlı ve varışlı parsiyel ve komple frigorifik taşıma. Birkaç paletlik yükten kamyon dolusu yüke kadar donuk, soğuk ve kuru gıda nakliyesi.',
    intro:
      'Yükünüz aracı doldurmuyorsa tam araç parası ödemeniz gerekmez. Aynı sıcaklıktaki yükleri aynı araçta birleştiriyoruz. Yükünüz büyükse ya da acilse aracı yalnızca size ayırıyoruz.',
    products: ['Birkaç paletten kamyon dolusu yüke kadar', 'Donuk, soğuk ve kuru gıda', 'Tek adres ya da çoklu teslim'],
    points: [
      { title: 'Parsiyel', text: 'Birkaç paletlik yük, aynı sıcaklık aralığındaki diğer yüklerle birleştirilir. Yükleme günü hattın doluluğuna göre belirlenir.' },
      { title: 'Komple araç', text: 'Araç yalnızca sizin yükünüzü taşır. Yükleme saatini ve teslim adresini siz belirlersiniz.' },
      { title: 'Ara teslim', text: 'Yol üzerindeki birden fazla adrese teslim aynı seferde planlanabilir.' },
    ],
    faq: [
      {
        q: 'Parsiyel fiyat nasıl hesaplanıyor?',
        a: 'Palet sayısı ya da ağırlık, sıcaklık aralığı, mesafe ve yükleme-teslim noktalarına göre. Arayın ya da WhatsApp’tan yazın, hızlıca teklif verelim.',
      },
      {
        q: 'Komple araçta hangi araç tipleri var?',
        a: 'Filomuz frigorifik kamyonlardan oluşuyor. Yükünüzün palet sayısı ve ağırlığına göre uygun aracı birlikte belirliyoruz.',
      },
    ],
    loadWord: 'parsiyel',
  },
];
