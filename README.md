# Kombi 7/24 Ankara — Serverless Web Sitesi

Ankara genelinde kombi bakım, tamir, arıza tespiti ve petek temizliği hizmeti
veren bir işletme için **serverless** (sunucusuz) web sitesi.

Tamamen statik bir sitedir; arka uç (backend) veya veritabanı yoktur.
Tüm iletişim **WhatsApp** üzerinden ilerler: form, telefon ve butonların hepsi
WhatsApp'a yönlendirir. Kendi sunucunuzu yönetmenize gerek yoktur; Vercel /
Netlify / Cloudflare Pages / GitHub Pages gibi platformlarda saniyeler içinde
yayına alınır.

## Proje Yapısı

```
.
├── index.html            # Tek sayfalık site (tüm içerik)
├── assets/
│   ├── css/style.css     # Tasarım
│   └── js/main.js        # Menü, scroll efektleri, formu WhatsApp'a yönlendirir
├── images/               # GERÇEK RESİMLERİNİZİ buraya koyun (images/README.md)
├── vercel.json           # Vercel ayarları (cache, temiz URL'ler)
└── README.md
```

## Yerelde Önizleme

Herhangi bir statik sunucu yeterli:

```bash
# Python ile
python3 -m http.server 5173
# Tarayıcıda: http://localhost:5173

# veya Node ile
npx serve .
```

## Yayına Alma (Deploy)
Site tamamen statik olduğu için aşağıdaki platformların hepsinde ek ayar
gerekmeden çalışır.

### Seçenek A — Vercel (önerilen)
1. Bu klasörü bir GitHub deposuna yükleyin.
2. https://vercel.com → **Add New → Project** → depoyu seçin.
3. Framework: **Other** (ayar gerekmez), **Deploy**.

CLI ile:
```bash
npm i -g vercel
vercel        # önizleme
vercel --prod # canlı yayın
```

### Seçenek B — Netlify
https://app.netlify.com → **Add new site → Import** → depoyu seçin → Deploy.

### Seçenek C — Cloudflare Pages / GitHub Pages
Klasörü olduğu gibi yayınlamanız yeterli; herhangi bir derleme adımı yoktur.

## Form Talepleri Nasıl İşliyor?
Backend yoktur. Ziyaretçi formu doldurup gönderince bilgiler hazır bir mesaja
dönüştürülür ve doğrudan **WhatsApp**'a (0535 721 21 90) yönlendirilir;
müşteri tek tıkla mesajı gönderir. Telefon ve diğer butonlar da WhatsApp'a
veya arama ekranına bağlıdır. Numarayı değiştirmek için `assets/js/main.js`
içindeki `WHATSAPP` değerini ve `index.html` içindeki `905357212190`
bağlantılarını güncelleyin.

## Resimler
Gerçek fotoğraflarınızı `images/` klasörüne ekleyin. Detaylar: `images/README.md`.
Resim eklenene kadar site, yer tutucu görsellerle düzgün çalışmaya devam eder.

## İşletme Bilgileri (güncellemek için)
- **Telefon / WhatsApp:** 0535 721 21 90 → `index.html` içinde `905357212190` olarak geçer.
- **Adres:** Osmangazi Mah. Aşıkpaşa Cad. 143/C Keçiören/Ankara
- Bilgileri değiştirmek için `index.html` içinde arama yapıp güncelleyin.
