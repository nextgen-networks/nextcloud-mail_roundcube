OC.L10N.register(
    "mail_roundcube",
    {
    "Scheme of external URL must be one of \"http\" or \"https\", but nothing was specified." : "Dış adres şeması \"http\" ya da \"https\" olmalıdır. Ancak herhangi bir şey belirtilmemiş.",
    "Scheme of external URL must be one of \"http\" or \"https\", \"%s\" given." : "Dış adres şeması \"http\" ya da \"https\" olmalıdır. Ancak \"%s\" belirtilmiş.",
    "Host-part of external URL seems to be empty" : "Dış adresin sunucu bölümü boş gibi görünüyor",
    "RoundCube instance does not seem to be reachable at %s" : "%s adresindeki Roundcube kopyasına erişilemiyor gibi görünüyor",
    "Value \"%1$s\" for set \"%2$s\" is not convertible to boolean." : "\"%2$s\" ayarının \"%1$s\" değeri boolean biçimine dönüştürülemedi.",
    "Parameter %s set to \"%s\"" : "%s parametresi \"%s\" olarak ayarlandı",
    "Unknown Request" : "İstek bilinmiyor",
    "Parameter \"%s\" set to \"%s\"" : "\"%s\" parametresi \"%s\" olarak ayarlandı",
    "Parameter \"%s\" set to given value" : "\"%s\" parametresi belirtilen değere ayarlandı",
    "Unknown admin setting: \"%1$s\"" : "\"%1$s\" yönetici ayarı bilinmiyor",
    "The admin setting \"%1$s\" is read-only" : "\"%1$s\" yönetici ayarı salt okunur",
    "Value \"%1$s\" for setting \"%2$s\" is not convertible to boolean." : "\"%2$s\" ayarı için \"%1$s\" değeri boolean biçimine dönüştürülemez.",
    "true" : "doğru",
    "false" : "yanlış",
    "Unknown personal setting: \"%1$s\"" : "\"%1$s\" kişisel ayarı bilinmiyor",
    "The personal setting \"%1$s\" is read-only" : "\"%1$s\" kişisel ayarı salt okunur",
    "Unknown personal setting: \"%s\"." : "\"%s\" kişisel ayarı bilinmiyor",
    "Cannot set email credentials for chosen address choice \"%s\"." : "Seçilmiş \"%s\" adres seçeneği için e-posta kimlik doğrulama bilgileri ayarlanamaz.",
    "Cannot set email credentials if SSO is enforced." : "Tek oturum açma zorunlu kılındığında e-posta kimlik doğrulama bilgileri ayarlanamaz.",
    "Cannot set email credentials if personal encryption is required." : "Kişisel şifreleme zorunlu kılındığında e-posta kimlik doğrulama bilgileri ayarlanamaz.",
    "RoundCube Integration" : "Roundcube bütünleştirmesi",
    "Installation problem; the required resource \"%1$s\" of type \"%2$s\" is not installed on the server, please contact the system administrator!" : "Kurulum sorunu. Gereken \"%2$s\" türündeki \"%1$s\" kaynağı sunucu üzerine kurulmamış.\nLütfen sistem yöneticisi ile görüşün!",
    "Error, caught an exception." : "Hata, bir sorunla karşılaşıldı.",
    "Caused by previous exception" : "Önceki sorundan kaynaklandı",
    "bytes" : "bayt",
    "The supplied color-string \"%s\" seems to be invalid." : "Belirtilen \"%s\" renk dizgesi geçersiz gibi görünüyor.",
    "The input color values are invalid." : "Giriş rengi değerleri geçersiz.",
    "RoundCube Mail" : "Roundcube Mail",
    "RoundCube Web Mail" : "Roundcube Web Mail",
    "Embed an installation of RoundCube into Nextcloud" : "Nextcloud üzerine bir Roundcube kurulumu ekleyin",
    "Integrates an existing RoundCube standalone email-webapp into NextCloud, with optional SSO." : "Bağımsız çalışan bir Roundcube web e-posta kurulumunu, isteğe bağlı tek oturum açma kullanarak Nextcloud ile bütünleştirir.",
    "Choose a prefix-folder" : "Bir ön ek klasörü seçin",
    "Invalid path selected: \"{dir}\"." : "Seçilmiş yol geçersiz: \"{dir}\".",
    "Selected path: \"{dir}/{base}/\"." : "Seçilmiş yol: \"{dir}/{base}/\".",
    "Embedded RoundCube, Admin Settings" : "Eklenmiş Roundcube, yönetici ayarları",
    "Roundcube Installation" : "Roundcube kurulumu",
    "RoundCube Installation Path" : "Roundcube kurulumu yolu",
    "RoundCube path can be enterered relative to the Nextcloud server" : "Roundcube yolu Nextcloud sunucusuna göre yazılabilir",
    "Email Address Selection" : "E-posta adresi seçimi",
    "Cloud Login-Id" : "Bulut oturum açma kodu",
    "USER-ID" : "Kullanıcı kodu",
    "Email Domain" : "E-posta etki alanı",
    "User's Preferences" : "Kullanıcı ayarları",
    "User's Choice" : "Kullanıcının seçimi",
    "Advanced Settings" : "Gelişmiş ayarlar",
    "Force single sign on (disables custom password)." : "Tek oturum açma dayatılsın (özel parolayı devre dışı bırakır)",
    "Show RoundCube top information bar (shows logout button)." : "Roundcube üst bilgi çubuğu görüntülensin (oturumu kapat düğmesini görüntüler).",
    "Disable when debugging with self-signed certificates." : "Kendinden imzalı sertifikalarla hata ayıklarken devre dışı bırakın.",
    "Enable SSL verification." : "SSL doğrulaması kullanılsın",
    "Encrypt per-user data -- in particular their email passwords -- with their personal cloud password. This implies that these settings will be lost when users forget their passwords. If unchecked the email login credentials are still protected by the server secret. The latter implies that an administrator is able to decrypt the login credentials, but the configuration data survives user password-loss." : "Bu seçenek etkinleştirildiğinde, her kullanıcının verileri, özellikle e-posta parolaları, kişisel bulut parolasıyla şifrelenir. Bu durumda, kullanıcılar parolalarını unutursa bu yapılandırma ayarları da kaybolur. Bu seçenek devre dışı bırakıldığında, e-posta oturum açma kimlik bilgileri sunucu parolası tarafından korunmayı sürdürür. Bu durumda, bir yönetici oturum açma kimlik bilgilerinin şifresini çözebilir. Ancak kullanıcı parolasını unutursa yapılandırma ayarları kaybolmaz.",
    "Per-user encryption of config values." : "Her kullanıcının yapılandırma değerleri şifrelensin",
    "Unable to login into roundcube, there are login errors. Please check your personal Roundcube settings. Maybe a re-login to Nextcloud helps. Otherwise contact your system administrator." : "Roundcube oturumu açılırken bazı sorunlar çıktı. Lütfen kişisel Roundcube ayarlarınızı denetleyin. Yeniden Nextcloud oturumu açmak yardımcı olabilir. Sorun sürüyorsa sistem yöneticinizle görüşün.",
    "Unable to obtain email credentials for \"{emailUserId}\". Please check your personal Roundcube settings." : "\"{emailUserId}\" için e-posta kimlik doğrulama bilgileri alınamadı. Lütfen kişisel Roundcube ayarlarınızı denetleyin.",
    "Embedded RoundCube, Personal Settings" : "Eklenmiş Roundcube, kişisel ayarlar",
    "Email Login Name" : "E-posta kullanıcı adı",
    "Email-User for Roundcube" : "Roundcube e-posta kullanıcısı",
    "Email-Password" : "E-posta parolası",
    "Email-Password for Roundcube " : "Roundcube e-posta parolası",
    "Globally configured as USERID@{emailDefaultDomainAdmin}" : "Genel olarak KullanıcıKodu@{E-postaVarsayılanEtkiAlani} olarak yapılandırılmış",
    "Globally configured as user's email address, see user's personal settings." : "Genel olarak kullanıcının e-posta adresi olarak yapılandırılmış, kullanıcının kişisel ayarlarına bakın.",
    "Please specify an email address to use with RoundCube." : "Lütfen Roundcube ile kullanılacak bir e-posta adresi belirtin.",
    "Single-sign-on is globally forced \"on\"." : "Tek oturum açma genel olarak \"Açık\" olacak şekilde ayarlanmış ",
    "Email password for RoundCube, if needed." : "Gerekiyorsa, Roundcube e-posta parolası.",
    "reason unknown" : "neden bilinmiyor",
    "Unable to query the initial value of all settings: {message}" : "Tüm ayarların varsayılan değerleri sorgulanamadı: {message}",
    "Unable to query the initial value of {settingsKey}: {message}" : "{settingsKey} için varsayılan değer sorgulanamadı: {message}",
    "Successfully set \"{settingsKey}\" to {value}." : "\"{settingsKey}\", {value} değerine ayarlandı.",
    "Setting \"{settingsKey}\" has been unset successfully." : "\"{settingsKey}\" ayarı kaldırıldı.",
    "Unable to set \"{settingsKey}\" to {value}: {message}." : "\"{settingsKey}\", {value} değerine ayarlanamadı: {message}.",
    "Unable to unset \"{settingsKey}\": {message}" : "\"{settingsKey}\" ayarı kaldırılamadı: {message}",
    "Confirmation Required" : "Onay gerekiyor",
    "Unconfirmed, reverting to old value." : "Onaylanmadı. Eski değere geri dönülüyor.",
    "Successfully set value for \"{settingsKey}\" to \"{displayValue}\"" : "\"{settingsKey}\", \"{displayValue}\" değerine ayarlandı",
    "Setting \"{setting}\" has been unset successfully." : "\"{setting}\" ayarı kaldırıldı.",
    "Could not set value for \"{settingsKey}\" to \"{value}\": {message}" : "\"{settingsKey}\", {value} değerine ayarlanamadı: {message}.",
    "OK" : "Tamam",
    "Created" : "Oluşturulma",
    "Accepted" : "Onaylandı",
    "Non-Authoritative Information" : "Yetkili olmayan bilgiler",
    "No Content" : "Herhangi bir içerik yok",
    "Reset Content" : "İçeriği sıfırla",
    "Partial Content" : "İçerik parçası",
    "Multi-Status (WebDAV)" : "Çok durumlu (WebDAV)",
    "Already Reported (WebDAV)" : "Zaten bildirilmiş (WebDAV)",
    "IM Used" : "Anında ileti kullanıldı",
    "Multiple Choices" : "Çoklu seçimler",
    "Moved Permanently" : "Kalıcı olarak taşındı",
    "Found" : "Bulundu",
    "See Other" : "Diğerlerine bakın",
    "Not Modified" : "Değiştirilmemiş",
    "Use Proxy" : "Vekil sunucu kullanılsın",
    "(Unused)" : "(Kullanılmıyor)",
    "Temporary Redirect" : "Geçici yönlendirme",
    "Permanent Redirect (experimental)" : "Kalıcı yönlendirme (deneysel)",
    "Bad Request" : "İstek hatalı",
    "Unauthorized" : "Kimliği doğrulanmamış",
    "Payment Required" : "Ödeme gerekli",
    "Forbidden" : "Yasak",
    "Not Found" : "Bulunamadı",
    "Method Not Allowed" : "Yönteme izin verilmiyor",
    "Not Acceptable" : "Kabul edilemez",
    "Proxy Authentication Required" : "Vekil sunucu için kimlik doğrulaması gerekiyor",
    "Request Timeout" : "İstek zaman aşımına uğradı",
    "Conflict" : "Çakışma",
    "Gone" : "Gitti",
    "Length Required" : "Uzunluk zorunludur",
    "Precondition Failed" : "Ön koşul karşılanamadı",
    "Request Entity Too Large" : "İstek varlığı çok büyük",
    "Request-URI Too Long" : "İstek adresi çok uzun",
    "Unsupported Media Type" : "Ortam türü desteklenmiyor",
    "Requested Range Not Satisfiable" : "İstenilen aralık karşılanabilir değil",
    "Expectation Failed" : "Beklenti karşılanamadı",
    "I'm a teapot (RFC 2324)" : "Ben bir çaydanlığım (RFC 2324)",
    "Enhance Your Calm (Twitter)" : "Sakinliğinizi artırın (Twitter)",
    "Unprocessable Entity (WebDAV)" : "İşlenemeyen varlık (WebDAV)",
    "Locked (WebDAV)" : "Kilitli (WebDAV)",
    "Failed Dependency (WebDAV)" : "Bağımlılık sağlanamadı (WebDAV)",
    "Reserved for WebDAV" : "WebDAV için ayrılmış",
    "Upgrade Required" : "Yükseltme gerekiyor",
    "Precondition Required" : "Ön koşul karşılanmalı",
    "Too Many Requests" : "Çok fazla sayıda istekte bulunuldu",
    "Request Header Fields Too Large" : "İstek üst bilgi alanları çok büyük",
    "No Response (Nginx)" : "Yanıt yok (Nginx)",
    "Retry With (Microsoft)" : "Şununla yeniden dene (Microsoft)",
    "Blocked by Windows Parental Controls (Microsoft)" : "Windows ebeveyn denetimi tarafından engellendi (Microsoft)",
    "Unavailable For Legal Reasons" : "Yasal nedenlerle kullanılamıyor",
    "Client Closed Request (Nginx)" : "İstemci isteği sonlandırdı (Nginx)",
    "Internal Server Error" : "Sunucuda bir sorun çıktı",
    "Not Implemented" : "Henüz eklenmemiş",
    "Bad Gateway" : "Ağ geçidi bozuk",
    "Service Unavailable" : "Hizmet kullanılamıyor",
    "Gateway Timeout" : "Ağ geçidi zaman aşımına uğradı",
    "HTTP Version Not Supported" : "HTTP sürümü desteklenmiyor",
    "Variant Also Negotiates (Experimental)" : "Çeşit de ayrıca iletişim kursun (deneysel)",
    "Insufficient Storage (WebDAV)" : "Depolama alanı yetersiz (WebDAV)",
    "Loop Detected (WebDAV)" : "Çevrim algılandı (WebDAV)",
    "Bandwidth Limit Exceeded (Apache)" : "Bant genişliği sınırına ulaşıldı (Apache)",
    "Not Extended" : "Genişletilmemiş",
    "Network Authentication Required" : "Ağ için kimlik doğrulaması gerekiyor",
    "Network read timeout error" : "Ağ okuma işlemi zaman aşımına uğradı",
    "Network connect timeout error" : "Ağa bağlanma işlemi zaman aşımına uğradı",
    "Operation cancelled by user." : "Kullanıcı işlemi iptal etti.",
    "Aborted" : "Vazgeçildi",
    "Error" : "Hata",
    "System Administrator" : "Sistem yöneticisi",
    "Feedback email: {AutoReport}" : "Geri bildirim e-postası: {AutoReport}",
    "Something went wrong." : "Bir şeyler ters gitti.",
    "If it should be the case that you are already logged in for a long time without interacting with the app, then the reason for this error is probably a simple timeout." : "Web uygulamasıyla etkileşime girmeden oturumunuz uzun süredir açık kalmışsa, bu hata büyük olasılıkla zaman aşımından kaynaklanmıştır.",
    "In any case it may help to logoff and logon again, as a temporary workaround. You will be redirected to the login page when you close this window." : "Her durumda, geçici bir çözüm olarak oturumu kapatıp yeniden açmak yardımcı olabilir. Bu pencereyi kapattığınızda oturum açma sayfasına yönlendirileceksiniz.",
    "Unrecoverable unknown internal error, no details available" : "Aşılamayan ve bilinmeyen bir iç sorun çıktı. Herhangi bir ayrıntı yok.",
    "Internal Error" : "İç sorun",
    "Field {RequiredField} not present in AJAX response." : "AJAX yanıtında {RequiredField} alanı yok.",
    "Missing data" : "Veriler eksik",
    "The submitted data \"{stringValue}\" seems to be a plain string, but we need an object where the data is provided through above listed properties." : "Gönderilen \"{stringValue}\" verileri bir düz metin dizgesi gibi görünüyor. Ancak verilerin yukarıda listelenen özellikler aracılığıyla sağlandığı bir nesne gerekiyor.",
    "Error: plain string received" : "Hata: Düz metin alındı",
    "The submitted data is not a plain object, and does not provide the properties listed above." : "Gönderilen veriler bir düz metin nesne değil ve yukarıda belirtilen özellikleri vermiyor.",
    "Error: not a plain object" : "Hata: Bir düz metin nesnesi değil",
    "Unknown JSON error response to AJAX call: {status} / {error}" : "AJAX çağrısına verilen JSON hata yanıtı bilinmiyor: {status} / {error}",
    "HTTP error response to AJAX call: {code} / {error}" : "AJAX çağrısına HTTP hata yanıtı verildi: {code} / {error}",
    "No" : "Hayır",
    "Yes" : "Evet",
    "Debug Information" : "Hata ayıklama bilgileri",
    "unknown error" : "hata bilinmiyor",
    "Unable to download data from \"{url}\": {message}" : "\"{url}\" adresinden veriler indirilemedi: {message}",
    "The quick brown fox jumps over the lazy dog." : "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar."
},
"nplurals=2; plural=(n > 1);");
