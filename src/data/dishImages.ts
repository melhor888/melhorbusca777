import sushiMisto from "@/assets/dishes/sushi-misto.jpg";
import sashimiMisto from "@/assets/dishes/sashimi-misto.jpg";
import nigiriSalmao from "@/assets/dishes/nigiri-salmao.jpg";
import temakiSalmao from "@/assets/dishes/temaki-salmao.jpg";
import uramakiCalifornia from "@/assets/dishes/uramaki-california.jpg";
import hosomakiPepino from "@/assets/dishes/hosomaki-pepino.jpg";
import futomaki from "@/assets/dishes/futomaki.jpg";
import nigiriAtum from "@/assets/dishes/nigiri-atum.jpg";
import temakiSkin from "@/assets/dishes/temaki-skin.jpg";
import ramenTonkotsu from "@/assets/dishes/ramen-tonkotsu.jpg";
import ramenShoyu from "@/assets/dishes/ramen-shoyu.jpg";
import ramenMiso from "@/assets/dishes/ramen-miso.jpg";
import udonKitsune from "@/assets/dishes/udon-kitsune.jpg";
import udonTempura from "@/assets/dishes/udon-tempura.jpg";
import yakisoba from "@/assets/dishes/yakisoba.jpg";
import sobaFria from "@/assets/dishes/soba-fria.jpg";
import sobaQuente from "@/assets/dishes/soba-quente.jpg";
import yakitori from "@/assets/dishes/yakitori.jpg";
import karaage from "@/assets/dishes/karaage.jpg";
import tempuraMista from "@/assets/dishes/tempura-mista.jpg";
import tonkatsu from "@/assets/dishes/tonkatsu.jpg";
import gyudon from "@/assets/dishes/gyudon.jpg";
import katsudon from "@/assets/dishes/katsudon.jpg";
import oyakodon from "@/assets/dishes/oyakodon.jpg";
import sukiyaki from "@/assets/dishes/sukiyaki.jpg";
import shabuShabu from "@/assets/dishes/shabu-shabu.jpg";
import teppanyaki from "@/assets/dishes/teppanyaki.jpg";
import takoyaki from "@/assets/dishes/takoyaki.jpg";
import okonomiyaki from "@/assets/dishes/okonomiyaki.jpg";
import onigiri from "@/assets/dishes/onigiri.jpg";
import taiyaki from "@/assets/dishes/taiyaki.jpg";
import dango from "@/assets/dishes/dango.jpg";
import yakiimo from "@/assets/dishes/yakiimo.jpg";
import gyoza from "@/assets/dishes/gyoza.jpg";
import edamame from "@/assets/dishes/edamame.jpg";
import sunomono from "@/assets/dishes/sunomono.jpg";
import missoshiro from "@/assets/dishes/missoshiro.jpg";
import harumaki from "@/assets/dishes/harumaki.jpg";
import agedashiTofu from "@/assets/dishes/agedashi-tofu.jpg";
import missoshiru from "@/assets/dishes/missoshiru.jpg";
import tonjiru from "@/assets/dishes/tonjiru.jpg";
import ramenTradicional from "@/assets/dishes/ramen-tradicional.jpg";
import lamenArtesanal from "@/assets/dishes/lamen-artesanal.jpg";
import ozoni from "@/assets/dishes/ozoni.jpg";
import mochi from "@/assets/dishes/mochi.jpg";
import dorayaki from "@/assets/dishes/dorayaki.jpg";
import manju from "@/assets/dishes/manju.jpg";
import anmitsu from "@/assets/dishes/anmitsu.jpg";
import matchaCheesecake from "@/assets/dishes/matcha-cheesecake.jpg";
import matchaParfait from "@/assets/dishes/matcha-parfait.jpg";
import warabiMochi from "@/assets/dishes/warabi-mochi.jpg";

const dishImages: Record<string, string> = {
  "sushi-misto": sushiMisto,
  "sashimi-misto": sashimiMisto,
  "nigiri-salmao": nigiriSalmao,
  "temaki-salmao": temakiSalmao,
  "uramaki-california": uramakiCalifornia,
  "hosomaki-pepino": hosomakiPepino,
  "futomaki": futomaki,
  "nigiri-atum": nigiriAtum,
  "temaki-skin": temakiSkin,
  "ramen-tonkotsu": ramenTonkotsu,
  "ramen-shoyu": ramenShoyu,
  "ramen-miso": ramenMiso,
  "udon-kitsune": udonKitsune,
  "udon-tempura": udonTempura,
  "yakisoba": yakisoba,
  "soba-fria": sobaFria,
  "soba-quente": sobaQuente,
  "yakitori": yakitori,
  "karaage": karaage,
  "tempura-mista": tempuraMista,
  "tonkatsu": tonkatsu,
  "gyudon": gyudon,
  "katsudon": katsudon,
  "oyakodon": oyakodon,
  "sukiyaki": sukiyaki,
  "shabu-shabu": shabuShabu,
  "teppanyaki": teppanyaki,
  "takoyaki": takoyaki,
  "okonomiyaki": okonomiyaki,
  "onigiri": onigiri,
  "taiyaki": taiyaki,
  "dango": dango,
  "yakiimo": yakiimo,
  "gyoza": gyoza,
  "edamame": edamame,
  "sunomono": sunomono,
  "missoshiro": missoshiro,
  "missoshiro-entrada": missoshiro,
  "harumaki": harumaki,
  "agedashi-tofu": agedashiTofu,
  "missoshiru": missoshiru,
  "tonjiru": tonjiru,
  "ramen-tradicional": ramenTradicional,
  "ramen-tradicional-sopa": ramenTradicional,
  "lamen-artesanal": lamenArtesanal,
  "ozoni": ozoni,
  "mochi": mochi,
  "dorayaki": dorayaki,
  "manju": manju,
  "anmitsu": anmitsu,
  "matcha-cheesecake": matchaCheesecake,
  "matcha-parfait": matchaParfait,
  "warabi-mochi": warabiMochi,
};

export function getDishImage(imageKey: string): string {
  return dishImages[imageKey] || sushiMisto;
}
