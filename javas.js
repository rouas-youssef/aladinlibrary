var books = [
  "Aladin",
  "Couac",
  "lune",
  "Palou",
  "tarik",
  "Waldo",
  "Windigo",
  "Homere_Odyssee"
];
var liens = [
  "http://manuel.ovh/letopweb/carroll_alice_aux_pays_des_merveilles.pdf",
  "http://manuel.ovh/letopweb/carroll_de_autre_cote_miroir.pdf",
  "http://manuel.ovh/letopweb/conan_doyle_ligue_des_rouquins_im.pdf",
  "http://manuel.ovh/letopweb/daudet_lettres_de_mon_moulin.pdf",
  "http://manuel.ovh/letopweb/dickens_conteurs_a_la_ronde.pdf",
  "http://manuel.ovh/letopweb/dumas_casse_noisette.pdf",
  "http://manuel.ovh/letopweb/contes_mille_et_une_nuits_tome1.pdf",
  "http://manuel.ovh/letopweb/grimm_contes_1.pdf",
  "http://manuel.ovh/letopweb/grimm_contes_2.pdf",
  "http://manuel.ovh/letopweb/kipling_le_livre_de_la_jungle.pdf",
  "http://manuel.ovh/letopweb/kipling_le_second_livre_de_la_jungle.pdf",
  "http://manuel.ovh/letopweb/perrault.pdf",
  "http://manuel.ovh/letopweb/swift_voyages_gulliver.pdf",
  "http://www.cndp.fr/fileadmin/user_upload/CNDP/catalogues/perrault/files/contes_perrault.pdf",
  "http://www.crdp-strasbourg.fr/je_lis_libre/livres/"
];
var audio = [
  "Gorille-Diane",
  "Juliette-la-rate",
  "La-petite-princesse",
  "partie1",
  "odyssee/Homere_-_L_Odyssee_Chant_1",
  "odyssee/Homere_-_L_Odyssee_Chant_2",
  "odyssee/Homere_-_L_Odyssee_Chant_3",
  "odyssee/Homere_-_L_Odyssee_Chant_4",
  "odyssee/Homere_-_L_Odyssee_Chant_5",
  "odyssee/Homere_-_L_Odyssee_Chant_6",
  "odyssee/Homere_-_L_Odyssee_Chant_7",
  "odyssee/Homere_-_L_Odyssee_Chant_8",
  "odyssee/Homere_-_L_Odyssee_Chant_9",
  "odyssee/Homere_-_L_Odyssee_Chant_10",
  "odyssee/Homere_-_L_Odyssee_Chant_11",
  "odyssee/Homere_-_L_Odyssee_Chant_12",
  "odyssee/Homere_-_L_Odyssee_Chant_13",
  "odyssee/Homere_-_L_Odyssee_Chant_14",
  "odyssee/Homere_-_L_Odyssee_Chant_15",
  "odyssee/Homere_-_L_Odyssee_Chant_16",
  "odyssee/Homere_-_L_Odyssee_Chant_17",
  "odyssee/Homere_-_L_Odyssee_Chant_18",
  "odyssee/Homere_-_L_Odyssee_Chant_19",
  "odyssee/Homere_-_L_Odyssee_Chant_20",
  "odyssee/Homere_-_L_Odyssee_Chant_21",
  "odyssee/Homere_-_L_Odyssee_Chant_22",
  "odyssee/Homere_-_L_Odyssee_Chant_23",
  "odyssee/Homere_-_L_Odyssee_Chant_24"
];
var francais = [
  "La justice est le fondement du pouvoir. ",
  "La nécessité est la mère de l'invention. ",
  "La patience est la clé du salut .",
  "Qui cultive [sa terre] fait la récolte.",
  "Qui cherche trouve.",
  "Qui obéit à sa colère perd sa courtoisie.",
  "Garder un secret, c'est une question d'honneur.",
  "Avoir dit la vérité m'a laissé sans ami.",
  "Soyez optimistes et tout ira pour le mieux.",
  "Recherchez le savoir fût-ce en Chine!",
  "Les conséquences de la colère sont beaucoup plus graves que ses causes. ",
  "Chaque interdit est recherché.",
  "Si tu veux être apprécié, mors ou voyage. ",
  "Celui qui est absent a son excuse avec lui.",
  "Les absents sont assassinés à coups de langue.",
  "Le propos de la nuit, le matin l'efface.",
  "NO s'excuse s'accuse.",
  "Rira bien qui rira le dernier .",
  "Dis-moi qui tu hantes, je te dirai qui tu es.",
  "qui vole oeuf volera boeuf."
];
var arabe = [
  " لا تيأس وإن عظمت أمنياتك فهي تصغر أمام الدعاء",
  " الاعتذار عن الخطأ لا يجرح كرامتك بل يجعلك كبيراً بعين من أخطأت بحقه",
  " من فتح مدرسة أقفل سجناً",
  " الطفل الذي اقتصر تعليمه على المدرسة هو طفل لم يتعلم",
  " قلب الأم مدرسة الطفل",
  " الجاهل يؤكد، والعالم يشك، والعاقل يتروى",
  " نصف العلم أخطر من الجهل",
  " من اتّكل على زاد غيره طال جوعه",
  " عند الامتحان يكرم المرء أو يهان",
  " قم للمعلم وفه التبجيلا كاد المعلم أن يكون رسولاً",
  " من طلب العلا من غير كدّ أضاع العمر في طلب المحال",
  " من عاشر حكيماً مات عليماً",
  " وإذا كانت النفوس كباراً تعبت في مرادها الأجسام",
  " أعز مكان في الدنيا سرج سابح وخير جليس في الزمان كتاب",
  " الأم مدرسة إذا أعددتها أعددت شعباً طيب الأعراق",
  " العلم يرفع بيتاً لا عماد له والجهل يهدم بيت العز والشرف",
  " أول العلم الصمت، والثاني حسن الاستماع، والثالث حفظه، والرابع العمل به، والخامس نشره",
  " الكذب داء والصدق دواء",
  " الصحة تاج على رؤوس الأصحاء لا يراه إلا المرضى",
  " أملك الناس لنفسه من كتم سره",
  " من ظَلَمَ نفسه فهو لغيره أظلم",
  " إذا أردت أن تطاع فأمر بما يستطاع",
  " عليَّ أن أسعى وليس علي إدراك النجاح",
  " لا تؤجل عمل اليوم إلى الغد",
  " من جد وجد ومن زرع حصد",
  " موت في عز خير من حياة في ذل",
  " الصبر مفتاح الفرج",
  " في التأني السلامة وفي العجلة الندامة",
  " الوقت كالسيف إن لم تقطعه قطعك",
  " خذ من الأمس النصيحة وخذ من اليوم العمل وخذ من الغد الأمل",
  " رأس الحكمة مخافة الله",
  " التائب من الذنب كمن لا ذنب له",
  " لا تقل فيما لا تعلم فتتهم فيما تعلم",
  " أصل الصبر حسن اليقين بالله",
  " دقيقة صبر تمنحك سنوات سلام",
  " من حاسب نفسه ربح ومن غفل عنها خسر",
  " الوحدة خير من جليس السوء",
  " الكلمة الطيبة صدقة",
  " اطلبوا العلم من المهد إلى اللحد",
  " من تواضع لله رفعه، ومن تكبر وضعه"
];
var english = [
  "Be strong enough to face the world each day.",
  "Be weak enough to know you cannot do everything.",
  "Be generous to those who need your help.",
  "Be frugal with what you need yourself.",
  "Be wise enough to know that you do not know everything",
  "Be faithful enough to believe in miracles.",
  "Be willing to share your joys.",
  "Be willing to share the sorrows of others.",
  "Be a leader when you see a path others have missed.",
  "Be a follower when you are shrouded in the midst of uncertainty.",
  "Be the first to congratulate an opponent who succeeds.",
  "Be the last to criticize a colleague who fails.",
  "Be sure where your next step will fall, so that you will not stumble.",
  "You Can Live without a Brother, But not without a Friend.",
  "Be sure of your final destination, in case you are going the wrong way.",
  "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
  "Time will soon teach you what you were ignorant of.",
  "Actions speak louder than words.",
  "The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget.",
  "Quality education is the best investment for your future."
];
var video = [
  "https://r2---sn-p5h-gc5d.googlevideo.com/videoplayback?expire=1573847670&ei=Fq7OXeSAH5rxNrzBjcAL&ip=154.16.134.58&id=o-AO5A4UjLAzTFzVz_-jGa1d8G7Bu7ZF1jYv6akEJCZfXH&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=62300533&ratebypass=yes&dur=1387.972&lmt=1540912952834652&fvip=2&fexp=23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgOaHo6PEbSKv86JbDZ-Mxlgtxy7eV-dpw5cdubmD9BfYCICB2H0Feb5vTD-7rUjBrUchmcrV9yvlVrUINnwi2vWit&title=L%27Odyss%C3%A9e%20%20%20Episode%201%20%20%20L%27oeil%20du%20Cyclope&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5d&ms=au&mt=1573835623&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAJT_3dK1X9_SYx0n1yqcjdvuYt_fBYT2_Hmw3Q7WIRNjAiEA_dp3vw0jdcLRS3TZLJ3XBLr1lyjUDILrFx8kAAM-Xug=",
  "https://r2---sn-p5h-gc5k.googlevideo.com/videoplayback?expire=1573847671&ei=F67OXdzAKI_owQGW0Z2wCg&ip=154.16.134.58&id=o-AIs414a98Nv3q3dfX8m7AxcS4zFhwN5lsjkwAkmnGN4G&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=63351935&ratebypass=yes&dur=1384.536&lmt=1389935699050181&fvip=2&fexp=23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAID6pdsdll0qhR48Cf8hDoSWbQAT3sbhMRn_kQvYOFctAiBi-NxEpP_DYmVtqyvfd2mgcwl-3nS78FOsVdCSdMuHyw%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%202%20%20%20Charybde%20et%20Scylla&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5k&ms=au&mt=1573835623&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAJslkqEJx1lWdNVJ9ca9kSWFc9tymJGC_j0aUqJfW79xAiBpBVZ8hI-iK6cqe3g7tR2Gcf1sY-yBxHT_enIbWcJgow==",
  "https://r4---sn-p5h-gc5d.googlevideo.com/videoplayback?expire=1573847672&ei=GK7OXcu2NsiMjAT9zrv4DA&ip=154.16.134.58&id=o-ACwK25Ey_o5sLHsQvDTUlOVbIKx0K8ZktuM6qyfDLzKK&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=79128932&ratebypass=yes&dur=1380.147&lmt=1540663476693735&fvip=5&fexp=23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAJ1iqxb_8jO2Uqg9sawnk4LaPgrVDwL7F1CeKyNYq70HAiEA0Z3tHyB3nmqR1QtMwUNq21EQ_T-ZD6VhEiImcj4a3H0%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%203%20%20%20Au%20royaume%20d%20Hades&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5d&ms=au&mt=1573835741&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhANgG4d5Af6hv2FarXFoii8vDEu3Y6Lggx-WZ2LOVplkIAiEAjIuhWFZ5zXvBbt_y2cILqE_4gZdyy98VQUpzxtScKxk=",
  "https://r4---sn-hgn7yn7z.googlevideo.com/videoplayback?expire=1573847674&ei=Gq7OXYSLB4iiDZ2opcgC&ip=154.16.134.58&id=o-AOsXSA2f1a8MqeSNJFXzwwinwmkRaoCbsEwMeXU9n8qU&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=64239804&ratebypass=yes&dur=1384.420&lmt=1387616818061907&fvip=4&fexp=9466587,23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgR69yXtas8rHMy-_mG4gmxc8PHaZeZj3n8Bxe3F6j_AcCIQD1HIQ2ZDYf5mqEF88gqt1vA7PjQ-sA-i86iBTiFV0xNg%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%204%20%20%20Le%20chant%20des%20sirenes&redirect_counter=1&cm2rm=sn-p5h-gc5k7z&req_id=8e68daeb8771a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7z&ms=nxu&mt=1573835697&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhANucgf93UrB2jB4e0-xDAKR_6iV7qvPFdpAbRVOh55Y7AiEAu_KLGg7IEVumJc6lj0-NE9cUTsqQ3hZ9DWo2y3Aj8co=",
  "https://r1---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1573847675&ei=G67OXYC-EZKcDsq1hTA&ip=154.16.134.58&id=o-AE0gNOSu1SykUqG8zi4Oawt2sD1e5m5sNf-3kCksRv0U&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=80377893&ratebypass=yes&dur=1380.147&lmt=1540043121625722&fvip=1&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAM9Vpvge4B6se2AUfW5B0YxQj--XZquFzR93OFt8T3ToAiA67VYJRCtRU7Wakt9fNty7Y4JPUzwsrHmuXgHxBDVXvA%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%205%20%20%20Circ%C3%A9&redirect_counter=1&cm2rm=sn-p5h-gc5d7e&req_id=344676b2fd3da3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1573835760&mv=m&mvi=0&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgT_jtK_bmru9nWrhHUioCoeV3-_I1Czb-angs4mtttGMCIQCe_LO5jrCmuThBZX1p2pC68YVUSvZna22YzhiWG3LFsw==",
  "https://r2---sn-p5h-gc5s.googlevideo.com/videoplayback?expire=1573847676&ei=HK7OXbqIHojRDoznpegL&ip=154.16.134.58&id=o-AMy6K2ZhFu4zNHhucI7YfrFYCSyfIJHoAPaUZH3hEJsh&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=88960607&ratebypass=yes&dur=1386.254&lmt=1540822615065172&fvip=2&fexp=23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAInISY7z5FxCWFk0E2d1ZiNLhl2k9AJqLh_09RaBIhHwAiEA-KK71HG-SL6WaTB2JEGspCpz8b_PU49cy9CGXb9CwhM%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%206%20%20%20L%27ile%20aux%20souvenirs&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5s&ms=au&mt=1573835741&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAJHvdr6eFj3xlf9L0Uo7Kd95CZp1cnkCnIBw6VRiu854AiEAtg_EqII61kyMmSkoHspOl_z7oOLrthtwLiuYP6x4U74=",
  "https://r1---sn-p5h-gc5r.googlevideo.com/videoplayback?expire=1573847677&ei=Ha7OXfTRKN-Wir4P7IyT-Ag&ip=154.16.134.58&id=o-AHhTCVXM0rrOMK3Nn1sf57Qw9GTpDm0VVlIy5LZTIP-0&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=64823428&ratebypass=yes&dur=1384.861&lmt=1390751976761417&fvip=5&fexp=23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhANFYQRcpAkdyyxbWMbznuosgLdMdXdZQt6rl0cLqd4DGAiEArGflJRvcMgbhUfeSfe_x3YRcARsbvbLYUmVZCAn5aew%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%207%20%20%20La%20mal%C3%A9diction%20des%20Lestrygons&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5r&ms=au&mt=1573835741&mv=m&mvi=0&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhALwXLd7dZyWMX5IgCURXFd1UBvkCBM-M5tgaEEJwduN6AiB4figGnPoqfei1BOzQJNubbNpmmAxE5cqbG_q86cL0kQ==",
  "https://r2---sn-hgn7yn7z.googlevideo.com/videoplayback?expire=1573847678&ei=Hq7OXaKCNMOJtQetlZyYAQ&ip=154.16.134.58&id=o-ACNK9e2rVl-9LSdRH0FtW2xbXxDZbmN5At1IUSMXp43Y&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=63822129&ratebypass=yes&dur=1383.862&lmt=1390815643750890&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhALx2uvVg1jubTBihLPGojmjWTFG9GAJ-VinK2oKpxH7_AiAFaW5wx6zgiW_G2vwJ6Wtxulf8BDLH8cX8YJjRKKR8dg%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%208%20%20%20Le%20vol%20de%20P%C3%A9gase&redirect_counter=1&cm2rm=sn-p5h-gc5d7l&req_id=7b1c02dae4c7a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7z&ms=nxu&mt=1573835863&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgavQTf3Jtn_Fpc1x1QPRr4167v5uL7a8Go2iXOdJ5zC0CIQCTj3hMrttX10n6ztmsdjNqClYUfjg8R56vwEdZIQuUBg==",
  "https://r4---sn-p5h-gc5d.googlevideo.com/videoplayback?expire=1573847680&ei=IK7OXfDJAYXgNumspNAC&ip=154.16.134.58&id=o-AL66GJNrDFw0fqVq5ZUP993AAas6SKgJtRjAyCRVzptz&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=63381992&ratebypass=yes&dur=1385.720&lmt=1390894832785815&fvip=4&fexp=23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAPumLKS4qbdBsUU64fVfVkoElSOADgrUunKv4O5wgAc-AiAvMk9JxLWerbwFvILyvghzs_WxvEwmTZzi361IirEQRA%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%209%20%20%20Les%20gorgones%20m%C3%A9dus%C3%A9es&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5d&ms=au&mt=1573835926&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgWGR6kOXfHjBRrdPlq1TYKKXF0DfQVTm-FbGmFfEZXSsCIBjqoXZdl5XcmxPWlbNlL6Be76e7OJIS5Ss2m67-rPuI",
  "https://r1---sn-p5h-gc5k.googlevideo.com/videoplayback?expire=1573847681&ei=Ia7OXfePCo2xiwSO_q7oAw&ip=154.16.134.58&id=o-AOlrKvOy-41ZLKBU_Kfppjn9ivI5WHwblaKnZEvSwgh4&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=69417768&ratebypass=yes&dur=1384.698&lmt=1390831437366833&fvip=1&fexp=23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgZf2mP1RmsK5gXYKsVxF3pdaIjOzDzL5YfoDCI7ZTn8oCIQD9KVs8Ej65KGM_xE0wcxvUntE7Buc5GTb3a8-zYPk06g%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2010%20%20%20Le%20palais%20des%20vents&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5k&ms=au&mt=1573835926&mv=m&mvi=0&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgU_TCw1eT8Dogok0lTNgmw7gRcuqKw_fglJMQZJy5NTgCIQCxbVkYxkmbklJj1BMBYOOxA1zobZm2XcimSvWzzP2iFw==",
  "https://r4---sn-p5h-gc5k.googlevideo.com/videoplayback?expire=1573847682&ei=Iq7OXfLDFJPYDO72t8gC&ip=154.16.134.58&id=o-AB7OswMdaX3HmV6aD6_T6HPviQz9xo_dnUlrebL-sFlo&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=63036290&ratebypass=yes&dur=1385.627&lmt=1390786660915724&fvip=4&fexp=23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAKnk1ldakZgFGfhGLOMoKgfp8JtaqHazL-jMTEdssEwoAiEAvCRAB7glUkAxooJXxEU9kiRdHn3tL4bh9fErm5dSBEU%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2011%20%20%20Les%20forges%20d%27Hephaistos&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5k&ms=au&mt=1573835926&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgJPO0k3ZXFZEmEJuSFQBfJ2x4SCq2a3XG48sMRn6i0jsCIQCbfNvEOOiiBKlgOAK-b4WatPpfbIiT4HvCMBBBCiO-VQ==",
  "https://r4---sn-hgn7rn7k.googlevideo.com/videoplayback?expire=1573847683&ei=I67OXdSAIczCD8HZgNgN&ip=154.16.134.58&id=o-AKdUuU1CwhcG4wmlfkwpXmUkGildcTE9lGvADlfc7tQ4&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=63187141&ratebypass=yes&dur=1384.582&lmt=1542368775040401&fvip=4&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgE-A4L_CJeiSFVWY41cWUTq5ZN8mTCBxohj8SPk-wsdwCIHMfF2OZBwKXuhyjyHJgORku0ZvTAFI0D_WzINRksItX&title=L%27Odyss%C3%A9e%20%20%20Episode%2012%20%20%20Le%20duel%20du%20centaure&redirect_counter=1&cm2rm=sn-p5h-gc5z7z&req_id=af7f1395c48ba3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rn7k&ms=nxu&mt=1573835981&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgeYq7JkS4o7DboqvroFQkC_wZNjO0sPver54tUPA-KQICIQDGWExaoqDJ-AeIzrBVD_3ihaznKLrVWu4WGx058d08RQ==",
  "https://r2---sn-4g5e6nsd.googlevideo.com/videoplayback?expire=1573847684&ei=JK7OXeb4KuaBjASC34O4Dg&ip=154.16.134.58&id=o-AIXwa56sfcMMGEWaF3NPv4hbgloP6zdb2u2RYJCEi96W&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=82919553&ratebypass=yes&dur=1396.099&lmt=1390828739637933&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhANlcpoY65gK1IgmdmNYzlRt7PS8WmEl2LLTAAbiiJB-8AiEArasPamqhetFONekJNJ923y5MbSmVUi5uSn3_l_LQ_M4%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2013%20%20%20La%20proph%C3%A9tie%20des%20harpie&cm2rm=sn-p5h-gc5k7l,sn-hgney7l&req_id=feb6886aee9ea3ee&redirect_counter=2&cms_redirect=yes&mip=41.140.172.249&mm=34&mn=sn-4g5e6nsd&ms=ltu&mt=1573836050&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAMYN-FZ2vKqT-uRgKpeiXrfCTcWYlwg01xE1SNrYgNw3AiEAgHxyxDZeufcWtYULFNPSb3R7wmWOWDnzG9C31e9uBvc=",
  "https://r4---sn-4g5ednsy.googlevideo.com/videoplayback?expire=1573847686&ei=Ja7OXcDEM8vcD42ej-AJ&ip=154.16.134.58&id=o-AMOEh2Zrfq-WwBYhXnZxgrZc4PXGo7TJCZ0qkOkVeM30&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=77886113&ratebypass=yes&dur=1396.169&lmt=1540739853907436&fvip=6&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgWd1BicuWHKm7XmLDBecSPmTY4CAO_kbIoPtj4tgMBjsCIDo3jOab_7J6rrOS4mpwrrUUGEWDruAem9pSaW-iYVR6&title=L%27Odyss%C3%A9e%20%20%20Episode%2014%20%20%20La%20flamme%20de%20l%27%C3%A9ternit%C3%A9&cm2rm=sn-p5h-gc5l7d,sn-hgnlz7z&req_id=18d7cdadbe4a3ee&redirect_counter=2&cms_redirect=yes&mip=41.140.172.249&mm=34&mn=sn-4g5ednsy&ms=ltu&mt=1573836050&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAPOfSGn0xP4XnkKzuhCSs0LX4WOdQ3n5ahsq8sC6-vH0AiEAhVtnyst-ciYWCkMMIpvmZYGD_vmD9V8naOgFhzStcFE=",
  "https://r5---sn-hgn7yn7s.googlevideo.com/videoplayback?expire=1573847687&ei=J67OXbmZBMThigT40oXACw&ip=154.16.134.58&id=o-AF7vf36xeo1fMyA5AwCJk06FQLLQjS1C3HP_uFKKd8i8&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=83187361&ratebypass=yes&dur=1396.169&lmt=1540838363975369&fvip=5&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAP6bH3Cd4f6Xq-awO6qVALuOi9VvfRU5H9HSq_dxvty0AiA2ec-XQCMNocZ40Q-DGX6kWRvi5w0hE6oIQoB2cwuiUg%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2015%20%20%20Le%20songe%20des%20lotophages&redirect_counter=1&cm2rm=sn-p5h-gc5r7s&req_id=632583d52d1a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7s&ms=nxu&mt=1573836102&mv=m&mvi=4&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAOQAjrB_5stlQk90staL3PHLD-nWbAgbxqOvLyG2Oz01AiAnPGaQL6FF6ceBZxkkMG_eMJfahURIX_ZkGtBuwFt_TA==",
  "https://r4---sn-hgn7yn7e.googlevideo.com/videoplayback?expire=1573847688&ei=KK7OXZCyDvOGir4PyJSkiAk&ip=154.16.134.58&id=o-AJUS01xX3tnfT50ccdQGDY7GN9V1eUfpdLZr3f9JL-EF&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=76911672&ratebypass=yes&dur=1396.169&lmt=1540800632887116&fvip=4&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgJU-yorEC2hTZS3i1ST7GCVIKKgL1QcNJ9RLMBq4OxPUCIHZ-LJCMOcY54XydoScN4Htb90-ciUMgN4nl94qSxBTD&title=L%27Odyss%C3%A9e%20%20%20Episode%2016%20%20%20La%20reine%20des%20amazones&redirect_counter=1&cm2rm=sn-p5h-gc5k7z&req_id=4daf4da3234ca3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7e&ms=nxu&mt=1573836163&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgLvIHNTQTjJYp_CST9Zu2p4G-ouwqmhF4a6jJq9O9BKsCIGiLvOQLUzQe92cltNMQfs6pFbg39U3o7RAMdf4Zu4CQ",
  "https://r2---sn-p5h-gc5d.googlevideo.com/videoplayback?expire=1573847689&ei=Ka7OXZeZF8PRigTD2rGABw&ip=154.16.134.58&id=o-APS4XPaHtqZL2eLioDdNV-YBN6XeMOY4BjqopTyWFApz&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=75208766&ratebypass=yes&dur=1380.170&lmt=1540113860698702&fvip=5&fexp=23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgCmlyq9mDm6Sif9mSdbuiq1TFuC-CMk6S_LUClLiQjPcCIQCbQkTmna3G4HMySx_gfD5Znbx_gCzRyddH-2C2UpR2Jw%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2017%20%20%20Le%20roi%20des%20titans&cms_redirect=yes&mip=41.140.172.249&mm=31&mn=sn-p5h-gc5d&ms=au&mt=1573836198&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhANMeNa_O9KYYmQLJIJPmRl-ljeJvjc64niD7Er2VDeQ5AiBQdDdbk5naXMnsLVjCZw0DDslkR7lCKA4dDscryv7OXA==",
  "https://r5---sn-hgn7rne7.googlevideo.com/videoplayback?expire=1573847690&ei=Kq7OXfvLHdHgigSd-J_ICA&ip=154.16.134.58&id=o-AK-y1fBWnpGAhP_2oHo-j_AP5vz6mrtTR5ElnoMNVyKb&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=75865542&ratebypass=yes&dur=1380.170&lmt=1569670880480744&fvip=5&fexp=9466587,23842630&beids=9466587&c=WEB&txp=1311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgaQX8k5fkmLzZRfr22_BEl75rdEzzPjBPL0xEhbw-TyYCIB5LNQxUrZ4M9wLe40IBkGSD2wKClVDMmpeGgWgblfAm&title=L%27Odyss%C3%A9e%20%20%20Episode%2018%20%20%20Le%20miroir%20de%20la%20s%C3%A9duction&redirect_counter=1&cm2rm=sn-p5h-gc5l7d&req_id=17eefbf39a02a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rne7&ms=nxu&mt=1573836222&mv=m&mvi=4&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAM8Le_2mRSgr54NCfTRRUIqWL71SM-fM0K6NFKPE200PAiEAuaILS-fJHPCfkz7xSuOFxh9T5OdQG-cAe6hIEPQlRxU=",
  "https://r5---sn-hgn7rn7r.googlevideo.com/videoplayback?expire=1573847691&ei=K67OXfXlJ5DmigSz1IHQBA&ip=154.16.134.58&id=o-AGSKSyx_R_6tWrkzvjVKrsYpq1gmz1pSy-LEawd59J1Y&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=78473295&ratebypass=yes&dur=1380.217&lmt=1570127585395628&fvip=5&fexp=9466587,23842630&beids=9466587&c=WEB&txp=1311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgDKo5OouVHHclJygAiwixGLyERpSUCQB4kZPM5ThcmyMCIHehrHuQHLUU_UjnUbhyXbR6-VrjS4RLR2GM2w0fs94Q&title=L%27Odyss%C3%A9e%20%20%20Episode%2019%20%20%20Le%20dernier%20des%20atlante&redirect_counter=1&cm2rm=sn-p5h-gc5r7l&req_id=7aa3de5408c4a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rn7r&ms=nxu&mt=1573836222&mv=m&mvi=4&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgCQ2NEfAQ2rBXqT7JkdXqWyuO5b5GalA06_e3AyOL8W0CIQDAPAhYmJa3fq0f5lKwFu6oy5Ht7RyUvcQNP5QnyCrVyg==",
  "https://r4---sn-hgn7rnee.googlevideo.com/videoplayback?expire=1573847692&ei=LK7OXeXCLbnjiwSXmaaAAg&ip=154.16.134.58&id=o-AH35xToIAjk_rcvcTSi9Az5iqjx6JrKnkI78vlPpVBjW&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=71470692&ratebypass=yes&dur=1380.217&lmt=1540150950869161&fvip=4&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgL7nWbJhDydtjpDJeHsTvGiVSw_mQpJ4r2usSk48nUYUCIQCUwhbnM_oajfyBwzsaDx7617OeY54LLPCjD5jP-etePw%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2020%20%20%20Le%20puits%20magique&redirect_counter=1&cm2rm=sn-p5h-gc5e7k&req_id=30cc1ec63031a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rnee&ms=nxu&mt=1573836280&mv=m&mvi=3&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgb6dcZX9Cumw5kUIXZoyBjMwWbQKGqx0zNKkyjShSFDYCIQCmmNS2YxvS-p9prYYVWXv8RBSQgE8amd7FZ6FVYdPIow==",
  "https://r3---sn-4g5e6nls.googlevideo.com/videoplayback?expire=1573847694&ei=La7OXfSDOKiQir4P9NGLEA&ip=154.16.134.58&id=o-ALCUAE4f6Gy9DivFkgWWA4-K8PeOjgZTqph-UvBO_iH4&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=77535149&ratebypass=yes&dur=1380.170&lmt=1540762547182303&fvip=3&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAJhzbn5om2HrM-iBWl9fG9rlsRhpWTzgqRCgbRm3mhkhAiAlcQjRQbF7Hr0e8pg0-Wa3Z3jQld-Ny_xA51j7HPzw2g%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2021%20%20%20La%20lyre%20enchant%C3%A9e&cm2rm=sn-p5h-gc5e7s,sn-hgne67s&req_id=216c7ff1b469a3ee&redirect_counter=2&cms_redirect=yes&mip=41.140.172.249&mm=34&mn=sn-4g5e6nls&ms=ltu&mt=1573836287&mv=m&mvi=2&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgT-uDx-qM_NbxTfn6LWrDwZDVL3QskLgAnwl6SyVAcGYCIGMTZRi9ieWPbPACDVBV2X-uO6QrXq7FJ-T4DMHsNwE1",
  "https://r5---sn-hgn7rne7.googlevideo.com/videoplayback?expire=1573847695&ei=L67OXZq7AoGNjATQsq-QAg&ip=154.16.134.58&id=o-AJbbUnE_92E8KnvBGcRyx2jSmPgK9d2kpy0QT3pJ6Yt5&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=81974367&ratebypass=yes&dur=1380.426&lmt=1540854883764100&fvip=5&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhANw5TcQNshp2QBi_1S9HcSfdgwhLQeg86uElPHng7ga5AiEA_zTRwM-UE_MolfiprAOzXDg3zVXOkiESKWWMopkDL7U%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2022%20%20%20Le%20r%C3%A9veil%20de%20cronos&redirect_counter=1&cm2rm=sn-p5h-gc5e76&req_id=967648f33c94a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rne7&ms=nxu&mt=1573836342&mv=m&mvi=4&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAMp15Ka4r5EhuBK7f8OCb1dnqcWFP6gDBboxjnXgkqQmAiAPjXv9CtaFFYzx5SxTaFicOLDFmaBWwKY1qB9Gzogvgg==",
  "https://r3---sn-hgn7yn7e.googlevideo.com/videoplayback?expire=1573847696&ei=MK7OXZyjC5SMir4PqNm8CA&ip=154.16.134.58&id=o-AAfvA74G4QTY951ZhJeb4vJNTkO7fH0sULHjBKp7rVfs&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=76655666&ratebypass=yes&dur=1380.379&lmt=1569811388405091&fvip=6&fexp=9466587,23842630&beids=9466587&c=WEB&txp=1311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgMjyrLZLU0uJ1KgG0mVITmDXOIuaOKQpSskbtdTsSzi8CIQCnwwGouLd6VO8dueyFp3gWKJ_m2jqhef2Qd0QEXA4-cg%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2023%20%20%20Le%20labyrinthe&redirect_counter=1&cm2rm=sn-p5h-gc5d7s&req_id=6a8c42913631a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7yn7e&ms=nxu&mt=1573836342&mv=m&mvi=2&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgP6WHdEINID4Ux93Y0o_Aka_ADr9OO3C8fFRldOqbKKsCIEPiMeeDBhZ1QMZHjP3zCNqcKkmNrTLjdDs0m5ezk-uE",
  "https://r3---sn-hgn7rn7r.googlevideo.com/videoplayback?expire=1573847696&ei=MK7OXZyjC5SMir4PqNm8CA&ip=154.16.134.58&id=o-AAfvA74G4QTY951ZhJeb4vJNTkO7fH0sULHjBKp7rVfs&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=76655666&ratebypass=yes&dur=1380.379&lmt=1569811388405091&fvip=6&fexp=9466587,23842630&beids=9466587&c=WEB&txp=1311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgMjyrLZLU0uJ1KgG0mVITmDXOIuaOKQpSskbtdTsSzi8CIQCnwwGouLd6VO8dueyFp3gWKJ_m2jqhef2Qd0QEXA4-cg%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2023%20%20%20Le%20labyrinthe&redirect_counter=1&cm2rm=sn-p5h-gc5d7s&req_id=63729cddbe56a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rn7r&ms=nxu&mt=1573836422&mv=m&mvi=2&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgKQ54a6ti1EmaK_aXFtJfQuCRGomSPRYnxEfttbh0MpwCIHheJcl4svK_db_5NOjTbA_7T4qHbDSzITws_Thg0Vq8",
  "https://r2---sn-4g5ednsk.googlevideo.com/videoplayback?expire=1573847697&ei=Ma7OXa7rEZSSiwStzZzIDw&ip=154.16.134.58&id=o-ANO3lGyO2k0d4Mg87Ss_gePffs5loRo8GcrcCcqzyQyf&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=82450909&ratebypass=yes&dur=1380.426&lmt=1542237181126107&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAKT6XxIVN72WG97vZ01VSBHB8gGaNhwMQ3T-8_fqCM9SAiEAw2y4_4MCCJUU-1XAKGDQ0mpznC_7sWVFnzcxH_UESfA%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2024%20%20%20Maudite%20toison%20d%27or&cm2rm=sn-p5h-gc5k7l,sn-hgnlk7l&req_id=a45bef2b7b62a3ee&redirect_counter=2&cms_redirect=yes&mip=41.140.172.249&mm=34&mn=sn-4g5ednsk&ms=ltu&mt=1573836484&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAKfl7GWXQLrtkHqWToL_MkzhhBzFtN2ABTmAg2wwudg8AiB3c0sKQ8UsN0HJX_oYTHGnEmdhY9DEOuDcP0sSFOZesQ==",
  "https://r2---sn-hgn7rn7k.googlevideo.com/videoplayback?expire=1573847698&ei=Mq7OXfaVIobtwQG56oD4Dw&ip=154.16.134.58&id=o-AIDOf2MolBrx3sp5x_z7YVMX9lG5ytpz53GGIGBTEZX1&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=80393452&ratebypass=yes&dur=1396.099&lmt=1540695420059230&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAN5pKE4BUsdYW9ot9bchNo9SDKcPHQBD9lXC9HoGMEVcAiBR0w0sLMM8kW7Xc0rDNPfu7BZP-fEdNDtEdI1BMxYCeQ%3D%3D&title=L%27Odyss%C3%A9e%20%20%20Episode%2025%20%20%20Retour%20%C3%A0%20ithaque%201ere%20partie&redirect_counter=1&cm2rm=sn-p5h-gc567l&req_id=ae2943017780a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rn7k&ms=nxu&mt=1573836422&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgNQ23tlSCCTbku4st0VB0_IvmmImh8DE7qycJgOmT9KECIQD8umSc7NH6rr2xXSUhRqEtQRtSlKKT7drKWUE2IOyhLg==",
  "https://r2---sn-hgn7rn7y.googlevideo.com/videoplayback?expire=1573847699&ei=M67OXZXlMcrMigSP4ZLICQ&ip=154.16.134.58&id=o-ALSooNBb1-0wQvWCMi3zvYVshoui9Pb_cBDpMrwooket&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=81140072&ratebypass=yes&dur=1396.215&lmt=1540554873074334&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgLHDTzazzkIYgm2aPgFQrz5fxH41-nT4r5CHhp7i_B3UCIHSXrTAcH89JkJgYInnfXMsdAaAVXQkwsPqn9w-UqAlF&title=L%27Odyss%C3%A9e%20%20%20Episode%2026%20%20%20Retour%20a%20ithaque%202eme%20partie&redirect_counter=1&cm2rm=sn-p5h-gc5e7s&req_id=63386dcfbd45a3ee&cms_redirect=yes&mip=41.140.172.249&mm=30&mn=sn-hgn7rn7y&ms=nxu&mt=1573836422&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgOA-WwW-vJRdWHt2psBCqbyB9ocroSUgC43e8gnBZBqUCIQDD4tIneafZzTmW7MIhzeSOg8_TM_TgbSbCc5LwcZOhnA==",
  "https://r2---sn-4g5e6n76.googlevideo.com/videoplayback?expire=1573847701&ei=NK7OXdzuOY_HigSW5KG4Dw&ip=154.16.134.58&id=o-AHGIGl4sR-l-bnIEzH_3Tc2oSbZcJObdiAp3wSk5nIKE&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=4033154&ratebypass=yes&dur=45.093&lmt=1406769452963587&fvip=2&fexp=9466587,23842630&beids=9466587&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAKLEOMv9joiCnuH9Gzmodb5dio41Ku8NBMuW99AJc_B0AiApGR6n_iWveXTO8IMCmKtoKal8_6hiGHph12h9lMQwcQ%3D%3D&title=L%27Odyss%C3%A9e%20-%20G%C3%A9n%C3%A9rique&cm2rm=sn-p5h-gc5d7l,sn-hgnek7l&req_id=2b05375bfe71a3ee&redirect_counter=2&cms_redirect=yes&mip=41.140.172.249&mm=34&mn=sn-4g5e6n76&ms=ltu&mt=1573836484&mv=m&mvi=1&pl=21&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAPTi0bKKe1uOTqOTbsrpb7aHw0XHebDouQgWBdxsdQ41AiEA1dLX0zWBmN0YhWRe1tXAFStWzzr8X6FHyUeBC3PFQPc="
];
change();
var line;
var etat = false;
for (var j = 1; j <= books.length + liens.length; j++) {
  if (j == 1) document.getElementById("books").innerHTML += "<div  ><ul>";
  line =
    "<li><button  class='book'  onclick='Read(" +
    j +
    ")'  id='" +
    j +
    "'></button></li >";
  document.getElementById("books").innerHTML += line;
  if (j <= books.length) {
    document.getElementById(j).style.backgroundImage =
      "url(books/" + books[j - 1] + ".jpg)";
  }
  if (j % 6 == 0 || j == books.length + liens.length)
    document.getElementById("books").innerHTML += "</ul ></div ><div><ul>";
}

document.getElementById("books").innerHTML +=
  "<div><h2 id='Ecoute'>Ecoute</h2></div>";

for (var j = 1; j <= audio.length; j++) {
  if (j == 1) document.getElementById("books").innerHTML += "<div><ul>";
  line =
    "<li><button  class='book' onclick='Ecoute(" +
    j +
    ")'  href='books/Aladin.pdf'  id='a" +
    j +
    "'>" +
    " </button></li >";
  document.getElementById("books").innerHTML += line;

  document.getElementById("a" + j).style.backgroundImage =
    "url(audio/" + audio[j - 1] + ".jpg)";
  if (audio[j - 1].includes("odyssee")) {
    document.getElementById("a" + j).style.backgroundImage =
      "url(audio/odyssee/Homere_Odyssee.jpg)";
  }
  if (j % 6 == 0 || j == audio.length)
    document.getElementById("books").innerHTML += "</ul >  </div ><div><ul>";
}

document.getElementById("books").innerHTML +=
  "<div><h2 id='Video'>videot</h2></div>";

for (var j = 1; j <= video.length; j++) {
  if (j == 1) document.getElementById("books").innerHTML += "<div><ul>";
  line =
    "<li><button  class='book'  onclick='watch(" +
    j +
    ")'  id='v" +
    j +
    "'></button></li >";
  document.getElementById("books").innerHTML += line;
  if (j <= video.length) {
    document.getElementById("v" + j).style.backgroundImage =
      "url(video/" + j + ".jpg)";
  } else {
  }
  if (j % 6 == 0 || j == video.length)
    document.getElementById("books").innerHTML += "</ul >  </div ><div><ul>";
}
function change() {
  if (etat) {
    document.getElementById("arabe").innerHTML =
      arabe[Math.floor(Math.random() * arabe.length)];

    document.getElementById("francai").innerHTML =
      francais[Math.floor(Math.random() * francais.length)];

    document.getElementById("english").innerHTML =
      english[Math.floor(Math.random() * english.length)];
  }
  etat = !etat;
  document.getElementById("intro").style.backgroundImage =
    "url( img/background/" + Math.floor(Math.random() * 9 + 1) + ".jpg)";
  setTimeout("change();", "6000");
}

function Read(i) {
  if (i <= books.length) {
    document.getElementById(
      "iframe"
    ).style.backgroundImage = document.getElementById(i).style.backgroundImage;
    document.getElementById("read").src = "books/" + books[i - 1] + ".pdf";
  } else {
    document.getElementById("read").src = liens[i - books.length - 1];
    document.getElementById(
      "iframe"
    ).style.backgroundImage = document.getElementById(1).style.backgroundImage;
  }
  document.getElementById(1).style.height("1");
}
function Ecoute(i) {
  document.getElementById(
    "audio"
  ).style.backgroundImage = document.getElementById(
    "a" + i
  ).style.backgroundImage;

  document.getElementById("voice").src = "audio/" + audio[i - 1] + ".mp3";
}
function watch(i) {
  document.getElementById("videos").style.backgroundImage =
    "url(video/" + i + ".jpg)";

  document.getElementById("video").src = video[i - 1];
}
