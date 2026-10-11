/* Editable article text: each row is English, Dutch, Karakalpak Latin, Karakalpak Cyrillic.
   Keep keys unchanged. Edit the matching language string and refresh.
   English HTML is the no-JavaScript fallback. */
(()=>{'use strict';const rows={
  "title": [
    "From raw light to the final image",
    "Van ruwe opnamen naar het uiteindelijke beeld",
    "Dáslepki kadrlardan tayar súwretke shekem",
    "Дәслепки кадрлардан таяр сүўретке шекем"
  ],
  "series": [
    "Journal · Entry 04 · Processing workflow",
    "Dagboek · Deel 04 · Bewerkingsworkflow",
    "Kúndelik · 04 · Súwretti óńlew tártibi",
    "Күнделик · 04 · Сүўретти өңлеў тәртиби"
  ],
  "lead": [
    "Astrophotography post-processing: a practical guide using Siril, SETI Astro Suite / Cosmic Clarity, and Affinity Photo.",
    "Astrofotobewerking: een praktische gids met Siril, SETI Astro Suite / Cosmic Clarity en Affinity Photo.",
    "Astrofotografiyanı óńlew: Siril, SETI Astro Suite / Cosmic Clarity hám Affinity Photo menen ámeliy qollanba.",
    "Астрофотографияны өңлеў: Siril, SETI Astro Suite / Cosmic Clarity ҳәм Affinity Photo менен әмелий қолланба."
  ],
  "intro": [
    "Astrophotography is more than capturing light. Processing reveals faint structures, controls noise, and balances the target with its stars. The aim is to reveal information in the data, not invent details. Broadband star colours and assigned narrowband palettes need different approaches.",
    "Astrofotografie is meer dan licht vastleggen. Bewerking maakt zwakke structuren zichtbaar, vermindert ruis en brengt het object en de sterren in balans. Het doel is informatie uit de gegevens zichtbaar maken, niet details verzinnen. Breedband-sterrenkleuren en toegewezen smalbandpaletten vragen om verschillende benaderingen.",
    "Astrofotografiya tek jaqtılıqtı jazıp alıw emes. Óńlew ázzi dúzilislerdi kórsetedi, shuwıldı azaytadı hám nısan menen juldızlardı teńlestiredi. Maqset — jańa detallar oylap tabıw emes, maǵlıwmatta bar detalların ashıw. Keń polosalı juldız reńleri hám tar polosalı reń kartaları ushın bólek usıllar kerek.",
    "Астрофотография тек жақтылықты жазып алыў емес. Өңлеў әззи дүзилислерди көрсетеди, шуўылды азайтады ҳәм нысан менен жулдызларды теңлестиреди. Мақсет — жаңа деталлар ойлап табыў емес, мағлыўматта бар деталларын ашыў. Кең полосалы жулдыз реңлери ҳәм тар полосалы рең карталары ушын бөлек усыллар керек."
  ],
  "note": [
    "A working guide, not a fixed recipe. Adjust the order to your data and installed tools. If using linear deconvolution or a linear sharpening workflow, move that work before star separation and stretching; Step 8 also covers later finishing. Keep checkpoints and compare every strong adjustment with the original.",
    "Een werkbare leidraad, geen vast recept. Pas de volgorde aan je gegevens en geïnstalleerde tools aan. Voer lineaire deconvolutie of een lineaire verscherpingsworkflow vóór sterverwijdering en stretchen uit; stap 8 behandelt ook latere afwerking. Bewaar tussenversies en vergelijk sterke aanpassingen met het origineel.",
    "Bul — qatań qaǵıyda emes, ámeliy qollanba. Tártipti maǵlıwmatlarıńızǵa hám quralıńızǵa sáykes ózgertiń. Sızıqlı dekonvolyuciya yamasa sızıqlı ótkirlestiriwdi juldızlardı ajıratıwdan hám stretch islewden aldın orınlań; 8-qádem keyingi islewdi de qamtıydı. Aralıq nusqalardı saqlań hám kúshli ózgerislerdi túp nusqa menen salıstırıń.",
    "Бул — қатаң қағыйда емес, әмелий қолланба. Тәртипти мағлыўматларыңызға ҳәм қуралыңызға сәйкес өзгертиң. Сызықлы деконволйуция ямаса сызықлы өткирлестириўди жулдызларды ажыратыўдан ҳәм стретч ислеўден алдын орынлаң; 8-қәдем кейинги ислеўди де қамтыйды. Аралық нусқаларды сақлаң ҳәм күшли өзгерислерди түп нусқа менен салыстырың."
  ],
  "contents": [
    "Jump to a step",
    "Ga naar een stap",
    "Kerekli qádemge ótiw",
    "Керекли қәдемге өтиў"
  ],
  "back": [
    "↑ Step list",
    "↑ Stappenoverzicht",
    "↑ Qádemler dizimi",
    "↑ Қәдемлер дизими"
  ],
  "finalTitle": [
    "Final thoughts",
    "Tot slot",
    "Juwmaqlawshı pikirler",
    "Жуўмақлаўшы пикирлер"
  ],
  "final": [
    "Processing balances astronomical information with artistic interpretation. Every image begins with photons that may have travelled enormous distances before reaching the telescope. Calibration, stacking, stretching, and careful enhancement help turn faint signals into visible nebulae, galaxies, and cosmic dust. The goal is not to invent detail, but to reveal what the captured light can support.",
    "Bewerking brengt astronomische informatie en artistieke interpretatie in balans. Elk beeld begint met fotonen die enorme afstanden kunnen hebben afgelegd voordat ze de telescoop bereikten. Kalibreren, stacken, stretchen en zorgvuldig verfijnen maken zwakke signalen zichtbaar als nevels, sterrenstelsels en kosmisch stof. Het doel is geen details verzinnen, maar tonen wat het vastgelegde licht werkelijk ondersteunt.",
    "Óńlew astronomiyalıq maǵlıwmat penen kórkem túsindiriwdi teńlestiredi. Hár bir súwret teleskopqa jetkenshe uzaq aralıqtı basıp ótken fotonlardan baslanadı. Kalibrlew, kadrlardı birlestiriw, stretch hám abaylı óńlew ázzi signallardı tumanlıq, galaktika hám kosmos shańı túrinde kórsetedi. Maqset — detallar oylap tabıw emes, jazıp alınǵan jaqtılıqta bar maǵlıwmattı ashıw.",
    "Өңлеў астрономиялық мағлыўмат пенен көркем түсиндириўди теңлестиреди. Ҳәр бир сүўрет телескопқа жеткенше узақ аралықты басып өткен фотонлардан басланады. Калибрлеў, кадрларды бирлестириў, стретч ҳәм абайлы өңлеў әззи сигналларды туманлық, галактика ҳәм космос шаңы түринде көрсетеди. Мақсет — деталлар ойлап табыў емес, жазып алынған жақтылықта бар мағлыўматты ашыў."
  ],
  "sources": [
    "Tool documentation",
    "Documentatie",
    "Qurallar boyınsha qollanbalar",
    "Қураллар бойынша қолланбалар"
  ],
  "s0": [
    "Organize your raw data",
    "Orden je ruwe gegevens",
    "Dáslepki maǵlıwmatlardı tártipke keltiriń",
    "Дәслепки мағлыўматларды тәртипке келтириң"
  ],
  "s0p0": [
    "Create separate folders for lights, darks, flats, and bias or dark flats. Lights contain the target; darks measure thermal signal and repeatable sensor patterns; flats correct vignetting and dust shadows.",
    "Maak aparte mappen voor lights, darks, flats en bias of dark flats. Lights bevatten het object; darks meten thermisch signaal en terugkerende sensorpatronen; flats corrigeren vignettering en stofschaduwen.",
    "Lights, darks, flats hám bias yamasa dark flats ushın bólek papkalar ashıń. Lights nısandı saqlaydı; darks jıllılıq signalın hám sensor naǵısların ólsheydi; flats vignette hám shań kóleńkelerin dúzetedi.",
    "Lights, darks, flats ҳәм bias ямаса dark flats ушын бөлек папкалар ашың. Lights нысанды сақлайды; darks жыллылық сигналын ҳәм сенсор нағысларын өлшейди; flats вигнетте ҳәм шаң көлеңкелерин дүзетеди."
  ],
  "s0p1": [
    "Match calibration frames to the relevant camera settings and conditions. Dark flats match the flat exposure; bias frames measure the electronic offset. Use the calibration method appropriate to your camera, and do not subtract the offset twice.",
    "Stem kalibratieframes af op de juiste camera-instellingen en omstandigheden. Dark flats passen bij de flatbelichting; biasframes meten de elektronische offset. Gebruik de methode die bij je camera past en trek de offset niet tweemaal af.",
    "Kalibrlew kadrların kamera sazlawları hám túsiriw jaǵdayları menen sáykeslendiriń. Dark flats flat ekspoziciyasına sáykes boladı; bias elektronlıq baslanǵısh dárejeni ólsheydi. Kameraǵa sáykes usıldı tańlań, baslanǵısh dárejeni eki ret alıp taslamań.",
    "Калибрлеў кадрларын камера сазлаўлары ҳәм түсириў жағдайлары менен сәйкеслендириң. Дарк flats флат експозициясына сәйкес болады; bias електронлық басланғыш дәрежени өлшейди. Камераға сәйкес усылды таңлаң, басланғыш дәрежени еки рет алып тасламаң."
  ],
  "s0p2": [
    "Keep your original files unchanged. Good organization makes processing easier to repeat.",
    "Bewaar de originele bestanden ongewijzigd. Een goede indeling maakt de bewerking herhaalbaar.",
    "Túp nusqalardı ózgertpey saqlań. Tártipli papkalar óńlewdi qaytalawdı jeńillestiredi.",
    "Түп нусқаларды өзгертпей сақлаң. Тәртипли папкалар өңлеўди қайталаўды жеңиллестиреди."
  ],
  "s1": [
    "Calibration, registration and stacking",
    "Kalibreren, uitlijnen en stacken",
    "Kalibrlew, sáykeslendiriw hám birlestiriw",
    "Калибрлеў, сәйкеслендириў ҳәм бирлестириў"
  ],
  "s1p0": [
    "Calibrate the lights using the appropriate master calibration frames. Inspect exposures and reject clouds, tracking errors, and badly distorted stars.",
    "Kalibreer de lights met passende masterkalibratieframes. Controleer de opnamen en verwijder beelden met bewolking, volgfouten en sterk vervormde sterren.",
    "Lights kadrların sáykes master kalibrlew kadrları menen dúzetiń. Bult, baqlaw qátesi yamasa juldızları buzılǵan kadrlar bolsa, alıp taslań.",
    "Lights кадрларын сәйкес мастер калибрлеў кадрлары менен дүзетиң. Булт, бақлаў қәтеси ямаса жулдызлары бузылған кадрлар болса, алып таслаң."
  ],
  "s1p1": [
    "Register the remaining images to align their stars, then stack with a suitable rejection method. Winsorized Sigma Clipping is an option when enough frames are available.",
    "Lijn de overgebleven beelden op hun sterren uit en stack met een passende uitbijterverwijdering. Winsorized Sigma Clipping is een mogelijkheid bij voldoende frames.",
    "Qalǵan súwretlerdi juldızlar boyınsha sáykeslendiriń hám sáykes usıl menen birlestiriń. Kadrlar jetkilikli bolsa, Winsorized Sigma Clipping usılın qollanıw múmkin.",
    "Қалған сүўретлерди жулдызлар бойынша сәйкеслендириң ҳәм сәйкес усыл менен бирлестириң. Кадрлар жеткиликли болса, Winsorized Sigma Clipping усылын қолланыў мүмкин."
  ],
  "s1p2": [
    "Save a 32-bit FITS master. Crop invalid alignment borders before background modelling. Stacking improves signal-to-noise; the result remains linear. A screen auto-stretch is only a preview, not a permanent stretch.",
    "Bewaar een 32-bits FITS-master. Snijd ongeldige uitlijnranden weg vóór de achtergrondmodellering. Stacken verbetert de signaal-ruisverhouding; het resultaat blijft lineair. Een automatische schermstretch is alleen een voorbeeld.",
    "32-bit FITS master saqlań. Fon modelin dúziwden aldın sáykeslendiriwden qalǵan bos shetlerdi qıyıń. Birlestiriw signal menen shuwıl qatnasın jaqsılaydı; súwret sızıqlı bolıp qaladı. Ekrandaǵı avto-stretch — tek aldın ala kórinis.",
    "32-бит FITS мастер сақлаң. Фон моделин дүзиўден алдын сәйкеслендириўден қалған бос шетлерди қыйың. Бирлестириў сигнал менен шуўыл қатнасын жақсылайды; сүўрет сызықлы болып қалады. Екрандағы авто-стретч — тек алдын ала көринис."
  ],
  "s2": [
    "Remove background gradients",
    "Verwijder achtergrondgradiënten",
    "Fondaǵı gradientlerdi alıp taslań",
    "Фондағы градиентлерди алып таслаң"
  ],
  "s2p0": [
    "Open the linear master and use Background Extraction. Place samples away from stars, galaxies and nebulosity, select a suitable model, then preview the correction.",
    "Open de lineaire master en gebruik Background Extraction. Plaats monsters buiten sterren, sterrenstelsels en nevels, kies een passend model en bekijk de correctie vooraf.",
    "Sızıqlı masterdi ashıp, Background Extraction quralın qollanıń. Úlgilerdi juldız, galaktika hám tumanlıqtan bos jerlerge qoyıń. Sáykes model tańlap, nátiyjeni aldın ala kóriń.",
    "Сызықлы мастерди ашып, Background Extraction қуралын қолланың. Үлгилерди жулдыз, галактика ҳәм туманлықтан бос жерлерге қойың. Сәйкес модел таңлап, нәтийжени алдын ала көриң."
  ],
  "s2p1": [
    "Light pollution, moonlight and changing sky conditions can create gradients. Large nebulae and faint dust may fill the frame, however: do not mistake real structure for unwanted background.",
    "Lichtvervuiling, maanlicht en wisselende omstandigheden kunnen gradiënten veroorzaken. Grote nevels en zwak stof kunnen het hele beeld vullen: verwar echte structuren niet met ongewenste achtergrond.",
    "Jaqtılıq pataslanıwı, Ay jaqtılıǵı hám aspan jaǵdayları gradientlerdi payda etedi. Biraq úlken tumanlıq hám ázzi shań pútkil kadrdı qaplawı múmkin. Haqıyqıy dúzilisti artıqsha fon dep oylamań.",
    "Жақтылық патасланыўы, Ай жақтылығы ҳәм аспан жағдайлары градиентлерди пайда етеди. Бирақ үлкен туманлық ҳәм әззи шаң пүткил кадрды қаплаўы мүмкин. Ҳақыйқый дүзилисти артықша фон деп ойламаң."
  ],
  "s2p2": [
    "Aim for a balanced background without erasing astronomical signal.",
    "Streef naar een evenwichtige achtergrond zonder astronomisch signaal te wissen.",
    "Astronomiyalıq signaldı joǵaltpastan fondı teńlestiriń.",
    "Астрономиялық сигналды жоғалтпастан фонды теңлестириң."
  ],
  "s3": [
    "Calibrate the colours",
    "Kalibreer de kleuren",
    "Reńlerdi kalibrleń",
    "Реңлерди калибрлең"
  ],
  "s3p0": [
    "For broadband data, plate-solve the image and use PCC or SPCC where supported. Configure the relevant camera and filter response information when the tool requires it.",
    "Los voor breedbandgegevens de hemelpositie op en gebruik PCC of SPCC waar ondersteund. Stel zo nodig de responsgegevens van camera en filters in.",
    "Keń polosalı maǵlıwmat ushın súwrettiń aspan koordinataların anıqlań hám qollap-quwatlansa PCC yamasa SPCC qollanıń. Qural talap etse, kamera hám filtr sezgirligi maǵlıwmatların kirgiziń.",
    "Кең полосалы мағлыўмат ушын сүўреттиң аспан координаталарын анықлаң ҳәм қоллап-қуўатланса PCC ямаса SPCC қолланың. Қурал талап етсе, камера ҳәм филтр сезгирлиги мағлыўматларын киргизиң."
  ],
  "s3p1": [
    "Inspect the resulting star colours. Dual-narrowband data needs a different approach: ordinary broadband calibration does not automatically establish meaningful narrowband colours.",
    "Controleer de resulterende sterrenkleuren. Dual-narrowbandgegevens vragen een andere aanpak: normale breedbandkalibratie levert niet automatisch betekenisvolle smalbandkleuren.",
    "Juldız reńlerin tekseriń. Eki tar polosalı maǵlıwmatqa basqa usıl kerek: keń polosalı kalibrlew tar polosalı reńlerdi avtomat túrde durıs belgilemeydi.",
    "Жулдыз реңлерин тексериң. Еки тар полосалы мағлыўматқа басқа усыл керек: кең полосалы калибрлеў тар полосалы реңлерди автомат түрде дурыс белгилемейди."
  ],
  "s3p2": [
    "Choose and explain the intended channel mapping. Assigned palettes such as SHO are not the colours an unaided eye would see.",
    "Kies en beschrijf de kanaaltoewijzing. Toegewezen paletten zoals SHO zijn niet de kleuren die het blote oog zou zien.",
    "Kanallardı reńlerge bólistiriw usılın tańlap, túsindiriń. SHO sıyaqlı palitralar ápiwayı kóz kóretuǵın reńler emes.",
    "Каналларды реңлерге бөлистириў усылын таңлап, түсиндириң. SHO сыяқлы палитралар әпиўайы көз көретуғын реңлер емес."
  ],
  "s4": [
    "Reduce noise carefully",
    "Verminder ruis voorzichtig",
    "Shuwıldı abaylap azaytıń",
    "Шуўылды абайлап азайтың"
  ],
  "s4p0": [
    "Save a working copy and use the denoising mode appropriate to your image state and installed version. Linear data may benefit from early treatment; gentle finishing denoise can also be useful later.",
    "Bewaar een werkkopie en gebruik een ruisreductiemodus die past bij de beeldtoestand en geïnstalleerde versie. Een vroege behandeling kan lineaire gegevens helpen; later kan lichte aanvullende ruisreductie nuttig zijn.",
    "Jumıs nusqasın saqlań hám súwret jaǵdayına, programma nusqasına sáykes shuwıl azaytıw rejimin tańlań. Sızıqlı maǵlıwmattı erte óńlew paydalı bolıwı múmkin; keyin jeńil óńlew de kerek boladı.",
    "Жумыс нусқасын сақлаң ҳәм сүўрет жағдайына, программа нусқасына сәйкес шуўыл азайтыў режимин таңлаң. Сызықлы мағлыўматты ерте өңлеў пайдалы болыўы мүмкин; кейин жеңил өңлеў де керек болады."
  ],
  "s4p1": [
    "Inspect faint nebulosity and the dark background at full size. Reduce the strength if small structures become smooth or waxy.",
    "Controleer zwakke nevelstructuren en de donkere achtergrond op volledige grootte. Verminder de sterkte als details glad of wasachtig worden.",
    "Ázzi tumanlıq hám qarańǵı fondı tolıq ólshemde tekseriń. Mayda dúzilisler tegis yamasa mumǵa uqsap qalsa, kúshin azaytıń.",
    "Әззи туманлық ҳәм қараңғы фонды толық өлшемде тексериң. Майда дүзилислер тегис ямаса мумға уқсап қалса, күшин азайтың."
  ],
  "s4p2": [
    "If your chosen workflow sharpens linear data before denoising, perform that work first. Keep an untouched reference and avoid stacking several aggressive noise-reduction passes.",
    "Verscherpt jouw workflow lineaire gegevens vóór ruisreductie, doe dat dan eerst. Bewaar een onaangetast referentiebeeld en vermijd meerdere agressieve bewerkingen.",
    "Usılıńızda sızıqlı súwret shuwıl azaytıwdan aldın ótkirlestirilse, onı birinshi orınlań. Túp nusqanı saqlań, birneshe kúshli shuwıl azaytıwdı izbe-iz qollanbań.",
    "Усылыңызда сызықлы сүўрет шуўыл азайтыўдан алдын өткирлестирилсе, оны биринши орынлаң. Түп нусқаны сақлаң, бирнеше күшли шуўыл азайтыўды избе-из қолланбаң."
  ],
  "s5": [
    "Separate the stars",
    "Scheid de sterren",
    "Juldızlardı ajıratıń",
    "Жулдызларды ажыратың"
  ],
  "s5p0": [
    "Create a starless image for the nebula, galaxy and dust, plus a separate stars image. This allows independent adjustments without making the stars overpower the subject.",
    "Maak een sterloos beeld voor de nevel, het sterrenstelsel en stof, plus een apart sterrenbeeld. Zo kun je beide afzonderlijk aanpassen zonder dat sterren het onderwerp overheersen.",
    "Tumanlıq, galaktika hám shań ushın juldızsız súwret, sonday-aq bólek juldızlar súwretin jasań. Bul olardı bir-birinen ǵárezsiz óńlewge múmkinshilik beredi.",
    "Туманлық, галактика ҳәм шаң ушын жулдызсыз сүўрет, сондай-ақ бөлек жулдызлар сүўретин жасаң. Бул оларды бир-биринен ғәрезсиз өңлеўге мүмкиншилик береди."
  ],
  "s5p1": [
    "Follow your tool’s linear/non-linear input requirements. Siril’s StarNet integration provides a pre-stretch option for linear input; use the documented setting rather than treating every star-removal tool identically.",
    "Volg de eisen voor lineaire of niet-lineaire invoer. De StarNet-integratie van Siril biedt een voorstretch voor lineaire invoer; gebruik de gedocumenteerde instelling en behandel niet alle tools hetzelfde.",
    "Quraldıń sızıqlı yamasa sızıqlı emes súwretke qoyatuǵın talapların orınlań. Siril ishindegi StarNet sızıqlı súwret ushın aldın ala stretch usınısın beredi; qollanbadaǵı sazlawdı paydalanıń.",
    "Қуралдың сызықлы ямаса сызықлы емес сүўретке қоятуғын талапларын орынлаң. Siril ишиндеги StarNet сызықлы сүўрет ушын алдын ала стретч усынысын береди; қолланбадағы сазлаўды пайдаланың."
  ],
  "s5p2": [
    "Inspect the starless image for holes, residual halos and removed compact structures. Keep the original master and both outputs.",
    "Controleer op gaten, resterende halo’s en verdwenen compacte structuren. Bewaar de originele master en beide uitvoerbeelden.",
    "Juldızsız súwrette tesikler, qalǵan halolar hám joǵalǵan kishi dúzilisler bar-joǵın tekseriń. Túp masterdi hám eki nátiyjeni de saqlań.",
    "Жулдызсыз сүўретте тесиклер, қалған ҳалолар ҳәм жоғалған киши дүзилислер бар-жоғын тексериң. Түп мастерди ҳәм еки нәтийжени де сақлаң."
  ],
  "s6": [
    "Stretch the image",
    "Stretch het beeld",
    "Súwretke stretch qollanıń",
    "Сүўретке стретч қолланың"
  ],
  "s6p0": [
    "Begin gently with Generalized Hyperbolic Stretch (GHS), Asinh, or another suitable transformation. Increase faint structures gradually rather than applying one extreme change.",
    "Begin voorzichtig met Generalized Hyperbolic Stretch (GHS), Asinh of een andere geschikte transformatie. Maak zwakke structuren geleidelijk zichtbaar, niet met één extreme aanpassing.",
    "Generalized Hyperbolic Stretch (GHS), Asinh yamasa sáykes usıl menen jeńil baslań. Bir kúshli ózgeris ornına ázzi dúzilislerdi áste-aqırın kórsetiń.",
    "Generalized Hyperbolic Stretch (GHS), Asinh ямаса сәйкес усыл менен жеңил баслаң. Бир күшли өзгерис орнына әззи дүзилислерди әсте-ақырын көрсетиң."
  ],
  "s6p1": [
    "Monitor the histogram to avoid clipping the background or bright regions. Protect galaxy cores and bright nebula centres while revealing faint outer structure.",
    "Controleer het histogram om clipping in de achtergrond of heldere gebieden te voorkomen. Bescherm heldere kernen terwijl je de zwakke buitengebieden zichtbaar maakt.",
    "Fon yamasa jarqın aymaqlardıń kesilip qalıwın boldırmaw ushın gistogrammanı baqlań. Ázzi sırtqı dúzilisti ashqanda galaktika hám tumanlıq orayların saqlań.",
    "Фон ямаса жарқын аймақлардың кесилип қалыўын болдырмаў ушын гистограмманы бақлаң. Әззи сыртқы дүзилисти ашқанда галактика ҳәм туманлық орайларын сақлаң."
  ],
  "s6p2": [
    "Stretch the star layer separately when needed. A permanent stretch changes the data; a display auto-stretch does not.",
    "Stretch de sterrenlaag zo nodig apart. Een permanente stretch verandert de gegevens; een automatische schermstretch niet.",
    "Kerek bolsa juldız qatlamın bólek stretch isleń. Turaqlı stretch maǵlıwmattı ózgertedi, ekrandaǵı avto-stretch bolsa ózgertpeydi.",
    "Керек болса жулдыз қатламын бөлек стретч ислең. Турақлы стретч мағлыўматты өзгертеди, екрандағы авто-стретч болса өзгертпейди."
  ],
  "s7": [
    "Sharpening and deconvolution",
    "Verscherping en deconvolutie",
    "Ótkirlestiriw hám dekonvolyuciya",
    "Өткирлестириў ҳәм деконволйуция"
  ],
  "s7p0": [
    "This is a decision point, not a requirement to deconvolve after stretching. Linear deconvolution belongs earlier in a suitable workflow, normally before star removal and stretching. Later sharpening is a separate finishing option.",
    "Dit is een keuzemoment, geen opdracht om na het stretchen te deconvolueren. Lineaire deconvolutie hoort eerder in een passende workflow, gewoonlijk vóór sterverwijdering en stretchen. Latere verscherping is een aparte afwerkingsoptie.",
    "Bul — stretch-ten keyin dekonvolyuciya islew talabi emes, tańlaw qádemi. Sızıqlı dekonvolyuciya sáykes usılda erterek, ádette juldızlardı ajıratıwdan hám stretch-ten aldın orınlanadı. Keyingi ótkirlestiriw — bólek juwmaqlawshı usıl.",
    "Бул — стретч-тен кейин деконволйуция ислеў талаби емес, таңлаў қәдеми. Сызықлы деконволйуция сәйкес усылда ертерек, әдетте жулдызларды ажыратыўдан ҳәм стретч-тен алдын орынланады. Кейинги өткирлестириў — бөлек жуўмақлаўшы усыл."
  ],
  "s7p1": [
    "Use the image state required by your tool, apply a moderate strength and compare at 100% magnification. Look for ringing, dark halos, artificial edges and invented-looking texture.",
    "Gebruik de vereiste beeldtoestand, kies een matige sterkte en vergelijk op 100%. Let op ringen, donkere halo’s, kunstmatige randen en onnatuurlijke textuur.",
    "Qural talap etken súwret jaǵdayın paydalanıń, ortasha kúsh qollanıp, 100% ólshemde salıstırıń. Qara halolar, saqıynalar, jasalma shetler hám teksturanı tekseriń.",
    "Қурал талап еткен сүўрет жағдайын пайдаланың, орташа күш қолланып, 100% өлшемде салыстырың. Қара ҳалолар, сақыйналар, жасалма шетлер ҳәм текстураны тексериң."
  ],
  "s7p2": [
    "AI sharpening is not automatically equivalent to measured deconvolution or proven detail recovery. If a feature appears only after strong processing, do not treat it as confirmed astronomical structure.",
    "AI-verscherping is niet automatisch gelijk aan gemeten deconvolutie of bewezen detailherstel. Verschijnt iets alleen na sterke bewerking, behandel het dan niet als bevestigde astronomische structuur.",
    "AI ótkirlestiriw ólshengen dekonvolyuciya yamasa tastıyıqlanǵan detal tiklew menen birdey emes. Tek kúshli óńlewden keyin kóringen belgini tastıyıqlanǵan astronomiyalıq dúzilis dep qabıl etpeń.",
    "AI өткирлестириў өлшенген деконволйуция ямаса тастыйықланған детал тиклеў менен бирдей емес. Тек күшли өңлеўден кейин көринген белгини тастыйықланған астрономиялық дүзилис деп қабыл етпең."
  ],
  "s8": [
    "Refine the colours",
    "Verfijn de kleuren",
    "Reńlerdi jetilistiriń",
    "Реңлерди жетилистириң"
  ],
  "s8p0": [
    "Use adjustment layers for Curves, HSL, Vibrance and Selective Colour as available. Masks let you target specific regions instead of changing the whole image.",
    "Gebruik waar beschikbaar aanpassingslagen voor Curves, HSL, Vibrance en Selectieve kleur. Met maskers bewerk je specifieke gebieden in plaats van het hele beeld.",
    "Curves, HSL, Vibrance hám Selective Colour dúzetiw qatlamların paydalanıń. Maskalar pútkil súwretti emes, belgili aymaqtı óńlewge járdem beredi.",
    "Curves, HSL, Vibrance ҳәм Selective Colour дүзетиў қатламларын пайдаланың. Маскалар пүткил сүўретти емес, белгили аймақты өңлеўге жәрдем береди."
  ],
  "s8p1": [
    "For emission nebulae, balance the chosen H-alpha and OIII mapping. For broadband galaxies, preserve subtle differences between warm stellar populations and blue star-forming regions.",
    "Breng bij emissienevels de gekozen H-alpha/OIII-toewijzing in balans. Behoud bij breedbandsterrenstelsels subtiele verschillen tussen warme sterpopulaties en blauwe stervormingsgebieden.",
    "Emissiyalıq tumanlıqlarda tańlanǵan H-alpha hám OIII reńlerin teńlestiriń. Keń polosalı galaktikalarda jıllı juldız toparları menen kók juldız payda bolıw aymaqları ayırmashılıǵın saqlań.",
    "Емиссиялық туманлықларда таңланған H-alpha ҳәм OIII реңлерин теңлестириң. Кең полосалы галактикаларда жыллы жулдыз топарлары менен көк жулдыз пайда болыў аймақлары айырмашылығын сақлаң."
  ],
  "s8p2": [
    "Avoid saturation and channel clipping. Maintain smooth transitions and keep assigned narrowband colours clearly distinguished from broadband colour calibration.",
    "Vermijd oververzadiging en kanaalclipping. Behoud vloeiende overgangen en maak duidelijk onderscheid tussen toegewezen smalbandkleuren en breedbandkalibratie.",
    "Artıqsha reń toyınıwınan hám kanal kesiliwinen saqlanıń. Reń ótiwleri tegis bolsın; tar polosalı reń kartasın keń polosalı kalibrlew menen aralastırmań.",
    "Артықша рең тойыныўынан ҳәм канал кесилиўинен сақланың. Рең өтиўлери тегис болсын; тар полосалы рең картасын кең полосалы калибрлеў менен араластырмаң."
  ],
  "s9": [
    "Process and recombine the stars",
    "Bewerk en combineer de sterren",
    "Juldızlardı óńleń hám qayta birlestiriń",
    "Жулдызларды өңлең ҳәм қайта бирлестириң"
  ],
  "s9p0": [
    "Adjust the stars’ brightness and saturation independently. Apply gentle reduction only if they overwhelm the target, preserving differences in star colour.",
    "Pas helderheid en verzadiging van de sterren afzonderlijk aan. Verklein ze alleen voorzichtig als ze het object overheersen, met behoud van kleurverschillen.",
    "Juldızlardıń jarqınlıǵın hám reń toyınıwın bólek sazlań. Nısandı basıp ketse ǵana olardı abaylap kishireytiń, reń ayırmashılıǵın saqlań.",
    "Жулдызлардың жарқынлығын ҳәм рең тойыныўын бөлек сазлаң. Нысанды басып кетсе ғана оларды абайлап киширейтиң, рең айырмашылығын сақлаң."
  ],
  "s9p1": [
    "Recombine using the reconstruction method intended for the way the stars were separated. Screen and additive blending are not interchangeable in every workflow.",
    "Combineer met de reconstructiemethode die past bij de gebruikte sterverwijdering. Screen en optellend mengen zijn niet in elke workflow uitwisselbaar.",
    "Juldızlar qalay ajıratılǵanına sáykes qayta birlestiriw usılın paydalanıń. Screen hám qosıw arqalı aralastırıw hár usılda bir-birin almastırmaydı.",
    "Жулдызлар қалай ажыратылғанына сәйкес қайта бирлестириў усылын пайдаланың. Screen ҳәм қосыў арқалы араластырыў ҳәр усылда бир-бирин алмастырмайды."
  ],
  "s9p2": [
    "Inspect for halos, dark rings, doubled stars and unnatural edges. Stars belong to the scene: balance them with the target rather than eliminating them unnecessarily.",
    "Controleer op halo’s, donkere ringen, dubbele sterren en onnatuurlijke randen. Sterren horen bij de scène: breng ze in balans in plaats van ze onnodig te verwijderen.",
    "Halo, qara saqıyna, qos juldız hám jasalma shetlerdi tekseriń. Juldızlar — kórinistiń bólegi. Olardı artıqsha joǵaltpay, nısan menen teńlestiriń.",
    "Ҳало, қара сақыйна, қос жулдыз ҳәм жасалма шетлерди тексериң. Жулдызлар — көринистиң бөлеги. Оларды артықша жоғалтпай, нысан менен теңлестириң."
  ],
  "s10": [
    "Make the final adjustments",
    "Maak de laatste aanpassingen",
    "Sońǵı dúzetiwlerdi isleń",
    "Соңғы дүзетиўлерди ислең"
  ],
  "s10p0": [
    "Review background balance, contrast, colour consistency, star shapes and preservation of faint dust. Look for clipped shadows or highlights, over-sharpening and processing artefacts.",
    "Controleer de achtergrondbalans, het contrast, de kleurconsistentie, stervormen en het behoud van zwak stof. Let op geclipte schaduwen of hooglichten, te sterke verscherping en artefacten.",
    "Fon teńsalmaqlılıǵın, kontrasttı, reń sáykesligin, juldız pishinin hám ázzi shańnıń saqlanıwın tekseriń. Kesilgen qarańǵı yamasa jarqın aymaqlar, artıqsha ótkirlestiriw hám jasalma belgilerge itibar beriń.",
    "Фон теңсалмақлылығын, контрастты, рең сәйкеслигин, жулдыз пишинин ҳәм әззи шаңның сақланыўын тексериң. Кесилген қараңғы ямаса жарқын аймақлар, артықша өткирлестириў ҳәм жасалма белгилерге итибар бериң."
  ],
  "s10p1": [
    "Inspect both at full resolution and fitted to the screen. Compare with an earlier checkpoint to see whether the image genuinely improved.",
    "Bekijk op volledige resolutie én passend op het scherm. Vergelijk met een eerdere tussenversie om te beoordelen of het beeld echt beter is geworden.",
    "Tolıq ólshemde de, ekranǵa sıydırıp ta kóriń. Súwret jaqsılandı ma, sonı biliw ushın aldıńǵı nusqa menen salıstırıń.",
    "Толық өлшемде де, екранға сыйдырып та көриң. Сүўрет жақсыланды ма, соны билиў ушын алдыңғы нусқа менен салыстырың."
  ],
  "s10p2": [
    "Small, selective changes often work better than dramatic global adjustments.",
    "Kleine, gerichte aanpassingen werken vaak beter dan ingrijpende veranderingen aan het hele beeld.",
    "Kishi hám tańlap islengen ózgerisler pútkil súwretke kúshli ózgeris kirgiziwden jaqsıraq nátiyje beriwi múmkin.",
    "Киши ҳәм таңлап исленген өзгерислер пүткил сүўретке күшли өзгерис киргизиўден жақсырақ нәтийже бериўи мүмкин."
  ],
  "s11": [
    "Export and preserve the result",
    "Exporteer en bewaar het resultaat",
    "Nátiyjeni eksportlań hám saqlań",
    "Нәтийжени експортлаң ҳәм сақлаң"
  ],
  "s11p0": [
    "Save the editable project with its layers. Keep a high-quality 16-bit TIFF and the original stacked FITS for future reprocessing.",
    "Bewaar het bewerkbare project met lagen. Bewaar ook een hoogwaardige 16-bits TIFF en de originele gestackte FITS voor toekomstige bewerking.",
    "Qatlamları bar óńlenetuǵın joybardı saqlań. Keyin qayta óńlew ushın joqarı sapalı 16-bit TIFF hám birlestirilgen túp FITS faylın saqlań.",
    "Қатламлары бар өңленетуғын жойбарды сақлаң. Кейин қайта өңлеў ушын жоқары сапалы 16-бит TIFF ҳәм бирлестирилген түп FITS файлын сақлаң."
  ],
  "s11p1": [
    "Export PNG or a high-quality JPEG for publication. Convert the publication copy to sRGB and embed its colour profile; keep high-bit-depth masters in their appropriate working colour space.",
    "Exporteer PNG of JPEG van hoge kwaliteit voor publicatie. Converteer die kopie naar sRGB en sluit het kleurprofiel in; behoud masters met hoge bitdiepte in hun passende werkruimte.",
    "Járiyalaw ushın PNG yamasa joqarı sapalı JPEG eksportlań. Bul nusqanı sRGB reń keńisligine ótkizip, reń profilin qosıń; joqarı bitli masterlerdi sáykes jumıs reń keńisliginde saqlań.",
    "Жәриялаў ушын PNG ямаса жоқары сапалы JPEG експортлаң. Бул нусқаны sRGB рең кеңислигине өткизип, рең профилин қосың; жоқары битли мастерлерди сәйкес жумыс рең кеңислигинде сақлаң."
  ],
  "s11p2": [
    "Include the target and catalogue name, telescope and focal length, camera and filters, mount and guiding, exposure length and total integration, location and sky conditions, and processing software. Keep acquisition facts separate from artistic colour choices.",
    "Vermeld object en catalogusnaam, telescoop en brandpuntsafstand, camera en filters, montering en guiding, belichtingsduur en totale integratie, locatie en hemelcondities, en software. Maak onderscheid tussen opnamegegevens en artistieke kleurkeuzes.",
    "Nısan hám katalog atı, teleskop hám fokus aralıǵı, kamera hám filtrler, montirovka hám baǵdarlaw, ekspoziciya hám ulıwma waqıt, orın hám aspan jaǵdayı, programma atların kórsetiń. Túsiriw maǵlıwmatların kórkem reń tańlawlarınan ajıratıń.",
    "Нысан ҳәм каталог аты, телескоп ҳәм фокус аралығы, камера ҳәм филтрлер, монтировка ҳәм бағдарлаў, експозиция ҳәм улыўма ўақыт, орын ҳәм аспан жағдайы, программа атларын көрсетиң. Түсириў мағлыўматларын көркем рең таңлаўларынан ажыратың."
  ],
  "all": [
    "All entries",
    "Alle artikelen",
    "Barlıq jazbalar",
    "Барлық жазбалар"
  ],
  "date": [
    "11 October 2026 · I. Urazov",
    "11 oktober 2026 · I. Urazov",
    "11 oktyabr 2026 · I. Urazov",
    "11 октябрь 2026 · I. Urazov"
  ]
};
const langs=['en','nl','kaa-Latn','kaa-Cyrl'],selector=document.getElementById('language');
function apply(){const lang=langs.includes(selector.value)?selector.value:'en',i=langs.indexOf(lang);document.documentElement.lang=lang;document.querySelectorAll('[data-w]').forEach(el=>{if(rows[el.dataset.w])el.textContent=rows[el.dataset.w][i];});document.title=rows.title[i]+' — QARA TUYNIK';try{localStorage.setItem('qara-language',lang);}catch{}}
try{const saved=localStorage.getItem('qara-language');if(langs.includes(saved))selector.value=saved;}catch{}selector.addEventListener('change',apply);apply();})();
