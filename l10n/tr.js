OC.L10N.register(
    "mail_roundcube",
    {
    "Unknown admin setting: \"%1$s\"" : "\"%1$s\" yönetici ayarı bilinmiyor",
    "The admin setting \"%1$s\" is read-only" : "\"%1$s\" yönetici ayarı salt okunur",
    "Scheme of external URL must be one of \"http\" or \"https\", but nothing was specified." : "Dış adres şeması \"http\" ya da \"https\" olmalıdır. Ancak herhangi bir şey belirtilmemiş.",
    "Scheme of external URL must be one of \"http\" or \"https\", \"%s\" given." : "Dış adres şeması \"http\" ya da \"https\" olmalıdır. Ancak \"%s\" belirtilmiş.",
    "Host-part of external URL seems to be empty" : "Dış adresin sunucu bölümü boş gibi görünüyor",
    "Value \"%1$s\" for setting \"%2$s\" is not convertible to boolean." : "\"%2$s\" ayarı için \"%1$s\" değeri boolean biçimine dönüştürülemez.",
    "true" : "doğru",
    "false" : "yanlış",
    "Unknown personal setting: \"%1$s\"" : "\"%1$s\" kişisel ayarı bilinmiyor",
    "The personal setting \"%1$s\" is read-only" : "\"%1$s\" kişisel ayarı salt okunur",
    "Unknown personal setting: \"%s\"." : "\"%s\" kişisel ayarı bilinmiyor",
    "RoundCube Integration" : "Roundcube bütünleştirmesi",
    "Installation problem; the required resource \"%1$s\" of type \"%2$s\" is not installed on the server, please contact the system administrator!" : "Kurulum sorunu. Gereken \"%2$s\" türündeki \"%1$s\" kaynağı sunucu üzerine kurulmamış.\nLütfen sistem yöneticisi ile görüşün!",
    "User" : "Kullanıcı adı",
    "Password" : "Parola",
    "Login succeeded." : "Oturum açıldı.",
    "Login failed." : "Oturum açılamadı.",
    "Error, caught an exception." : "Hata, bir sorunla karşılaşıldı.",
    "Caused by previous exception" : "Önceki sorundan kaynaklandı",
    "bytes" : "bayt",
    "The supplied color-string \"%s\" seems to be invalid." : "Belirtilen \"%s\" renk dizgesi geçersiz gibi görünüyor.",
    "The input color values are invalid." : "Giriş rengi değerleri geçersiz.",
    "RoundCube Mail" : "Roundcube Mail",
    "RoundCube Web Mail" : "Roundcube İnternet e-posta",
    "Embed an installation of RoundCube into Nextcloud" : "Nextcloud üzerine bir Roundcube kurulumu ekleyin",
    "Integrates an existing RoundCube standalone email-webapp into NextCloud, with optional SSO." : "Bağımsız çalışan bir Roundcube İnternet e-posta kurulumunu, isteğe bağlı tek oturum açma kullanarak Nextcloud ile bütünleştirir.",
    "pick a color" : "bir renk seçin",
    "open" : "aç",
    "submit" : "gönder",
    "revert color" : "rengi öncekine döndür",
    "restore palette" : "paleti geri yükle",
    "factory reset palette" : "paleti ilk durumuna sıfırla",
    "Choose a folder" : "Bir klasör seçin",
    "Choose a prefix-folder" : "Bir ön ek klasörü seçin",
    "Invalid path selected: \"{dir}\"." : "Seçilmiş yol geçersiz: \"{dir}\".",
    "Selected path: \"{dir}/{base}/\"." : "Seçilmiş yol: \"{dir}/{base}/\".",
    "Click to submit your changes." : "Değişikliklerinizi göndermek için tıklayın.",
    "Reset Changes" : "Değişiklikleri sıfırla",
    "Clear Selection" : "Seçimi temizle",
    "Please select an item!" : "Lütfen bir öge seçin!",
    "An empty value is not allowed, please make your choice!" : "Boş bir değer kullanılamaz. Lütfen bir seçim yapın!",
    "Embedded RoundCube, Admin Settings" : "Eklenmiş Roundcube, yönetici ayarları",
    "Roundcube Installation" : "Roundcube kurulumu",
    "RoundCube Installation Path" : "Roundcube kurulumu yolu",
    "RoundCube path can be entered relative to the Nextcloud server" : "Roundcube yolu Nextcloud sunucusuna göre yazılabilir",
    "Email Address Selection" : "E-posta adresi seçimi",
    "Cloud Login-Id" : "Bulut oturum açma kimliği",
    "User ID" : "Kullanıcı kimliği",
    "Email Domain" : "E-posta etki alanı",
    "User's Preferences" : "Kullanıcı ayarları",
    "User's Choice" : "Kullanıcının seçimi",
    "Fixed Single Address" : "Sabit tek adres",
    "Global Email Login" : "Genel e-posta oturumu açma",
    "Global email user-name for Roundcube for all users" : "Tüm kullanıcılar için Roundcube genel e-posta kullanıcı adı",
    "Email Address" : "E-posta adresi",
    "Global Email Password" : "Genel e-posta parolası",
    "Email Password" : "E-posta parolası",
    "Global email password for Roundcube for all users" : "Tüm kullanıcılar için Roundcube genel e-posta parolası",
    "Advanced Settings" : "Gelişmiş ayarlar",
    "Force single sign on (disables custom password)." : "Tek oturum açma dayatılsın (özel parolayı devre dışı bırakır)",
    "Show RoundCube top information bar (shows logout button)." : "Roundcube üst bilgi çubuğu görüntülensin (oturumu kapat düğmesini görüntüler).",
    "Disable when debugging with self-signed certificates." : "Kendinden imzalı sertifikalarla hata ayıklarken devre dışı bırakın.",
    "Enable SSL verification." : "SSL doğrulaması kullanılsın",
    "Encrypt per-user data -- in particular their email passwords -- with their personal cloud password. This implies that these settings will be lost when users forget their passwords. If unchecked the email login credentials are still protected by the server secret. The latter implies that an administrator is able to decrypt the login credentials, but the configuration data survives user password-loss." : "Bu seçenek etkinleştirildiğinde, her kullanıcının verileri, özellikle e-posta parolaları, kişisel bulut parolasıyla şifrelenir. Bu durumda, kullanıcılar parolalarını unutursa bu yapılandırma ayarları da kaybolur. Bu seçenek devre dışı bırakıldığında, e-posta oturum açma kimlik bilgileri sunucu parolası tarafından korunmayı sürdürür. Bu durumda, bir yönetici oturum açma kimlik bilgilerinin şifresini çözebilir. Ancak kullanıcı parolasını unutursa yapılandırma ayarları kaybolmaz.",
    "Per-user encryption of config values." : "Her kullanıcının yapılandırma değerleri şifrelensin",
    "RoundCube CardDAV Tag" : "RoundCube CardDAV kod imi",
    "Tag of a preconfigured CardDAV account pointing to the cloud addressbook. See the documentation of the RCMCardDAV plugin." : "Bulut adres defterini gösteren, önceden yapılandırılmış bir CardDAV hesabı kod imi. RCMCardDAV eklentisi belgelerine bakın.",
    "RCMCardDAV Plugin Configuration" : "RCMCardDAV uygulama eki yapılandırması",
    "ClipBoard" : "Pano",
    "Config template has been copied to the clipboard." : "Yapılandırma kalıbı panoya kopyalandı.",
    "Failed copying the config template to the clipboard: {reason}." : "Yapılandırma kalıbı panoya kopyalanamadı: {reason}.",
    "Below is a configuration snippet which may or may not work with the current version of the RoundCube CardDAV plugin. The configuration shown below is just a suggestion and will not automatically be registered with the RoundCube app. It is your responsibility to configure the RoundCube CardDAV plugin correctly. Please have a look at the explanations in the README.md file." : "Aşağıda RoundCube CardDAV uygulama ekinin güncel sürümüyle çalışabilecek veya çalışmayabilecek bir yapılandırma bölümü bulunuyor. Aşağıda gösterilen yapılandırma yalnızca bir öneridir ve RoundCube uygulamasına otomatik olarak kaydedilmeyecektir. RoundCube CardDAV uygulama ekini doğru şekilde yapılandırmak sizin sorumluluğunuzdadır. Lütfen README.md dosyasındaki açıklamalara bakın.",
    "Unable to configure the CardDAV integration for \"{emailUserId}\"." : "\"{emailUserId}\" için CardDAV bütünleştirmesi yapılandırılamadı.",
    "Unable to obtain email credentials for \"{emailUserId}\". Please check your personal Roundcube settings." : "\"{emailUserId}\" için e-posta kimlik doğrulama bilgileri alınamadı. Lütfen kişisel Roundcube ayarlarınızı denetleyin.",
    "You did not tell me where to find your configured Roundcube instance. Please head over to the admin-settings and configure this app, thank you! I might also be a good idea to have a look at the README.md file which is distributed together with this app." : "Yapılandırılmış Roundcube kopyasını nerede bulacağımı bana söylemediniz. Lütfen yönetici ayarlarına gidin ve bu uygulamayı yapılandırın, teşekkürler! Bu uygulamayla birlikte dağıtılan README.md dosyasına da göz atmanız iyi olabilir.",
    "Unable to login into Roundcube, there are login errors. Please check your personal Roundcube settings. Maybe a re-login to Nextcloud helps. Otherwise contact your system administrator." : "Roundcube oturumu açılırken bazı sorunlar çıktı. Lütfen kişisel Roundcube ayarlarınızı denetleyin. Yeniden Nextcloud oturumu açmak yardımcı olabilir. Sorun sürüyorsa sistem yöneticinizle görüşün.",
    "Embedded RoundCube, Personal Settings" : "Eklenmiş Roundcube, kişisel ayarlar",
    "Email Login Name" : "E-posta kullanıcı adı",
    "Globally configured as USERID@{emailDefaultDomainAdmin}" : "Genel olarak KullanıcıKimliği@{E-postaVarsayılanEtkiAlani} olarak yapılandırılmış",
    "Globally configured as user's email address, see user's personal settings." : "Genel olarak kullanıcının e-posta adresi olarak yapılandırılmış, kullanıcının kişisel ayarlarına bakın.",
    "Globally configured as {fixedSingleEmailAddressAdmin}" : "{fixedSingleEmailAddressAdmin} tarafından genel olarak yapılandırılmış",
    "Please specify an email address to use with RoundCube." : "Lütfen Roundcube ile kullanılacak bir e-posta adresi belirtin.",
    "Globally configured by the administrator" : "Yönetici tarafından genel olarak yapılandırılmış",
    "Single sign-on is globally forced \"on\"." : "Tek oturum açma genel olarak \"Açık\" olacak şekilde ayarlanmış.",
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
    "Could not set value for \"{settingsKey}\" to \"{value}\": {message}" : "\"{settingsKey}\", {value} değerine ayarlanamadı: {message}."
},
"nplurals=2; plural=(n > 1);");
