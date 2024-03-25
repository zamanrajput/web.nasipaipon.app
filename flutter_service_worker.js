'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "d41c90f908e8bb7db3075e6bd56838a6",
".git/COMMIT_EDITMSG": "30f9c22bce775cd738828c548e795199",
".git/config": "18488aeace1ed2670c54f9eb98e243af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ebd58f66a464a35b5a89b1160c477ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d837d7fd89992a1e5c229b3a6488feb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb2781b43eec846a7e495c4679c84042",
".git/logs/refs/heads/main": "8233f83eb144d0b8c4aceff314fc24f7",
".git/logs/refs/remotes/origin/main": "2b0723b75c309bf862c419cc1dbf7d36",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/09/27a6e9d2d14d4959e33e01df5820055cdd0b51": "313190d24541a51c3d129ec0904d26e2",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0e/3a7e6ec760bf3a397f5e718ebba6da08d37ae7": "80deafbe01d44a00e1adbc8857ef2232",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/11/aabbb1913ac124898fdcb09b2bc1f6714e1a16": "ed9bed7bf60dd2d8fdf492cc9d30a31c",
".git/objects/15/089821cf70fad3d924b6954b15a93e0157912d": "e1eba2017d52722df50fc451fe2de5e8",
".git/objects/17/96581604a6166ea8ed3883e81a792586071956": "af3eb4c3ae7470c3a58b648ef0453734",
".git/objects/1d/0dc7e55f2bb4b7b3ffa4fe1b832fe4a6d70709": "8c301ca4aa0b529556077d0e6adc0e4c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/1923ee8120eaebba12a1bcdec139e13e889ae6": "d784dd426a25f0c0fa30cddaa8e25150",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/23/2011307989cb3cf2208de45cadbbbec5fdbe41": "a0d44bb275304619f785533a0f8b86a1",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/2f/60c864882e52ed0b547aaf06f8d9edf7b94886": "f0b2fb4aa9c364798199324ac0b166d5",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/35/405a46353aec0d20f782bb76092140c4a9fb73": "d9058e46b779cc69489095ca6dcb1ec0",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3a/db69e332e07401345b9d382cd5684c998b5c86": "1c81d8e8c8ecbb3e790a90ccb2d50508",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/41/5bc64949acc4bb702a1e0a91f9183e0a0253cf": "8a5bbffe2ee5cd1c5683130822088860",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/47/7089e62f6a4cf63990f343bd03b1084bab45b6": "47df501f621df37b5a1a8232d7015603",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/51/d3b5702e1593946ef148307a15792dd9bb2f4b": "1c7643f0b3e51587f56033cec6a2788f",
".git/objects/53/fd49c2cd90b3dd416a45da8c44d1f65a5e7e0e": "39deb4475ec1eca7a80b3b75383837d6",
".git/objects/56/873c5a7fffcee6f7aa0a9e7e0b62614b13b03c": "f68575a1e589459c8d9e84b8cc19691c",
".git/objects/57/3432fcb6927c2f41b761325fc189de97ba1868": "5dea51f0d6d7ba734db8b18c54e2156d",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/5f/45fedda018492f1dac20a3b6df84d672fc6497": "1875076d4565f67d2d9fed604016191d",
".git/objects/5f/6d3d2ebd85860c1c42544f1716d51dfd3f8ec7": "9a01ce4d5aac25d0eaf3216885fa05f3",
".git/objects/61/1c46a92cdc6f346616960ce91bef6e17d6f13e": "85f721f7926d12d1056823e83a5f8800",
".git/objects/62/9af254289ca40f68ba65b60f1a83721206243c": "abb551ea4d73d125cd988c4972d3f6f0",
".git/objects/64/ff9f23efa4731699e133b11e1ab0b8233b58d3": "3f6dcdf6f8e0068db51143f390e7155c",
".git/objects/65/ca5a57a605bee8a4e1de3037398ece1292a314": "236550eb7764498bccdeee6e79beaeb1",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/67/42d3804909f1c144778fc04b450110f194b9a9": "7210208bed8dd7bae7b247f784b3c0c8",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/72/a1095ea7971a7ec8f785a9496106dba32d55f3": "719f31a1ed0d62cd107df3b1fbdda636",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/7f/c8b9741e13274ecac6fb58a56a250acc686d25": "e8a5e90aabfe03ca9d9b09798ad40b61",
".git/objects/80/9d26041fbdcae1d1a5f72e221b1d2588918582": "2895010c8df8c9c69d0fc06172398605",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/85/2ba16c009e26f70d5caeafed7e41f595e953de": "0349e3477911cd4d9aa7b54ee51e01bb",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/07879de983f8f36973cac78b08e73f4b3d2630": "38377ded5ce7816a98c64d0af8837f56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/4fcba918caf0313ddaa35ab89fd4b4ebfb5984": "59e6766062fabf64ee9ebd0e3139ecac",
".git/objects/8d/de45714ee36d1023b207be837d6b02ae8ab751": "9d2f5574cac95f48fce77c42f792470a",
".git/objects/8f/8d669f33d143b5b2bf5b3a52087376252a8c7f": "24aaf90a107da26d9a559116710ed059",
".git/objects/91/77c0182dc9434a14ebd6a67d83dabb628f8dcd": "9146cf044790612241e8abddbc930c13",
".git/objects/91/ddbe672fcd4b48a7390f62d358524effa92be4": "e6daf6c507f1475c90103876a3a17ff5",
".git/objects/95/1b1048ca0f7537be3f70b1afc77ae4a7ca6fc5": "67d0a6aa4346c2957ce8edfe090e105e",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/96/efd0a7fdb63d6301b529001091a4dee2a6ac15": "99ea0b2720d52baaf3931705c2e823ab",
".git/objects/9b/2291b98d9e388847d6b75489e849e97a237b57": "3b3dd433c2f29e451aac22cbc3ee2d07",
".git/objects/9b/9856b3e204fc5cc68898cc880748721ad103b5": "584d7abc2678ac19ebb38020d361c5f5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/14c6310f294d4f1d744161e7e1809ac981cfa6": "85b149cf0b739327d76589b40a39eed2",
".git/objects/a8/1c7da29ff325f9e27311e3e403f16ee1530aea": "23437bdea8c5ad98d49acfca47e64ff6",
".git/objects/a9/2f1395df97becf9af765cbd672dbbb94948e7a": "2a5d9233c1edf8144f62f6b716fdcb86",
".git/objects/ab/91d955b9c72ea6076dc9436be20f03de31a707": "22fa6280e7be8657cb23a7f083eb854d",
".git/objects/ad/a02bdbf4eb49cd633f4f39c6c0dee5d702d6fc": "0ecc102d6f92fd7b888529a25ddf3db4",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/b3/4cc8200cc8bbafc234e61d88d29dff942a48b3": "23eab37ad8b1e0ae3d93f98dc052a20e",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6ba77761ed496bcf5cdd8a0583433286be3a97": "a1d86e5c8c7689220015b9cf9590cdf5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/be/b5a4ad6e7a2e0270a97034ac95eaaa0f4a7259": "0a2a813ba4603f3470c1953a79fca812",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/92dba2f832d24a9da9705c039041481daef4a8": "6757fd7dc79663f3ac8dd50077b4f48d",
".git/objects/c8/f8967cce5ca915c8e63b6b3a5a023d0bdcaeb9": "03a0a2aeaf95ba91a242f67d33dca266",
".git/objects/ca/a6ba53023c67e5be41cc5573fcfc63dfa6cf08": "c58b04c725620a779b49396e9dbee235",
".git/objects/cd/975ad2427719cc100d8894430b49ad9c030088": "c39d6e85d2dfc7d051c672c279260e78",
".git/objects/d0/ad239e11daf0680837c53e0663765bbab5a208": "14a5de9a300a4512ffd23721bc5585a8",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d2/591f6abc73b1ece72d59e720991e3eeb00939a": "134a2b9dff86825859e9d81505fc2742",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/de/22df056ab7c0d385d136ba51dd9f473ae326aa": "c2ac684f166a6da300110f61a2254bcc",
".git/objects/de/b5e746c5ec112a259283aa63b468a9625d25c4": "d450e7f051400cb755497073cadab287",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/c2e6b136f367b3dee77932f36d963786b78a16": "79c7804dc3cc0bbe8244b225a924f109",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/2dc89cb3c29eb6ecc80f88c7b1f332dd138aab": "a5f9cc35a19b7782e438252050919321",
".git/objects/f1/505fe082887d7473f0d9a7500ed3fe7b3c8aae": "179378e9033802de8e2c0526eff97394",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f3/e5272d8d00642596d73c1347bfacc10a959bdf": "188228af2cab5f0f56c52308089484b8",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/ORIG_HEAD": "b816c6a1e42aff76f034ccda4bb991f8",
".git/refs/heads/main": "be32f13a743598d7ed97e9b4205572f2",
".git/refs/remotes/origin/main": "be32f13a743598d7ed97e9b4205572f2",
"assets/AssetManifest.bin": "16f7317287250f6ac8c585e0e08bbf09",
"assets/AssetManifest.bin.json": "f80a15e071e55e986b421906a7d7b5dc",
"assets/AssetManifest.json": "6fe14105c09eca4020c5d8c0eefb0d62",
"assets/assets/icons/apple_icon.png": "3eb7a8ec437b590e28911582cdc978ac",
"assets/assets/icons/back.png": "420ac9099cba5b031cef35ce2766ebcf",
"assets/assets/icons/cart.png": "cbd5421e4bc2f5b31d8d54f333ce37f1",
"assets/assets/icons/chat.png": "a6e1afe9c268c657fd509c69af350f04",
"assets/assets/icons/down.png": "da3b6b6da627f94fcf216e6ca3521ab7",
"assets/assets/icons/fb_icon.png": "52e4919c1cbfa49b758eefbd45ebfc4e",
"assets/assets/icons/forget_icon.png": "0fba69a92de511c175a38204a5536a73",
"assets/assets/icons/google_icon.png": "a7ac46c0636d03e4e735d0eb2be66325",
"assets/assets/icons/home.png": "511ba6966453b49bc6fb25b589164b8f",
"assets/assets/icons/insta.png": "471381b36088dcac7814254eb550ea4e",
"assets/assets/icons/location.png": "bcf8c2ed848f1e49569937360656f1b0",
"assets/assets/icons/order.png": "34592fe74c03396e624f6692cdcaa034",
"assets/assets/icons/profile.png": "adf8162a3b3ef0e8456b097368bcb3fc",
"assets/assets/icons/send.png": "ecd1e8e383cdd7c25b63555b2e4bbe1d",
"assets/assets/icons/share.png": "8450da32c69dfd40c9a3211a0c476a18",
"assets/assets/icons/sort.png": "11b8017f4da06d1920f404315fc801e6",
"assets/assets/icons/tiktok.png": "d7c22739fd406ac6a7ea63074671c2fc",
"assets/assets/icons/yt.png": "2f5aca50bed1cdb9b47f5646d2150384",
"assets/assets/images/food.png": "6892ba608b224be6eaf45110aca5d186",
"assets/assets/images/kitchen.jpg": "7cd0e097db9bfb107397f98079dcd72d",
"assets/assets/images/logo.png": "a5a087d8967b6dab534e9f0af0af0a4e",
"assets/assets/images/onboarding.png": "e8fb076a21a0133eb7fa986a018ebdc7",
"assets/assets/images/onboarding2.png": "22f5417fe4b3a5d0f9ce4430d01a04e8",
"assets/assets/images/otp.png": "f4c13ec2dddbc94afc61905d91f31fd7",
"assets/FontManifest.json": "401e460ecccf217bb1cafa6d2eda8c6c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "580bc90f6d71826ac2cfb387282d2bde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ebec2180c8fd2244c0b887fe4abd79a5",
"canvaskit/canvaskit.wasm": "b730404c3182c77feae53f97aeab7247",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "85af9a3ce602e02632c701fa742320cb",
"canvaskit/chromium/canvaskit.wasm": "e85c2054a44abc8e393f58b32c1a4a8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "4ff83c62a0243119b7245316356685e7",
"canvaskit/skwasm.wasm": "0a5c4a5d97a16304b3e4d1a4c4a24b9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "093108428037f4b22630b34dfad8b806",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8e9ec77e237382fbb521509d89bc1c2f",
"/": "8e9ec77e237382fbb521509d89bc1c2f",
"main.dart.js": "bce33bb3053f34eabb649266741abad2",
"manifest.json": "43ec5a739832b3b46de07f9cd31ff603",
"version.json": "852b171c1b2fc2cf3340aac2e38b7507"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
