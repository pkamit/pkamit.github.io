'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "c0e3b5ae529dd98b140eaa39b59cef9a",
"assets/AssetManifest.smcbin": "4a78c7fce846851e5708cf9a449e37f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e1ae905852f09288bf014a780c6ea517",
"assets/NOTICES": "1af80573afef828422c1c3d30314012f",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f43688d81badd414d69583a4592d9b65",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e15299a4c2a027a66fd200fa266586e0",
"/": "26f7e4f3447b2643e596ab8380041713",
"main.dart.js": "4851aad8cce947c0b3d0eeb552391c61",
"manifest.json": "697fd1fc5ca0f5d2398836ae55c57058",
"pkamit.github.io/.git/COMMIT_EDITMSG": "f79b7d7747290c9ba1faef1f111a1f72",
"pkamit.github.io/.git/config": "7d581107b9a028171a8a6547368917ed",
"pkamit.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"pkamit.github.io/.git/FETCH_HEAD": "6cf4bf4999f81761065980deef309b1d",
"pkamit.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"pkamit.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"pkamit.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"pkamit.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"pkamit.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"pkamit.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"pkamit.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"pkamit.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"pkamit.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"pkamit.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"pkamit.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"pkamit.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"pkamit.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"pkamit.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"pkamit.github.io/.git/index": "b152c642b2fc262e642da168028b71a6",
"pkamit.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pkamit.github.io/.git/logs/HEAD": "30cb97ff589a6a5be9e2946eada0e532",
"pkamit.github.io/.git/logs/refs/heads/development": "e6c957cf86a563099092a20800a1dfce",
"pkamit.github.io/.git/logs/refs/heads/main": "d2e4cd0ac9b580e678078464ef1ff66f",
"pkamit.github.io/.git/logs/refs/remotes/origin/development": "46ee96dd2f9c527eab2e7bbeaef4fd8c",
"pkamit.github.io/.git/logs/refs/remotes/origin/HEAD": "790c370ecc5f90dbd85f6b187c36eb4f",
"pkamit.github.io/.git/logs/refs/remotes/origin/main": "608ed7e8f4d15c35c0bbcbbc77c15dc3",
"pkamit.github.io/.git/objects/0a/2675303b091bbee845da901f6795dd6faf2aa5": "29e5db0c9409da14f82515cdf485b1d0",
"pkamit.github.io/.git/objects/0d/14870a839e4ff1b0d4f84734fafb71be05a0e3": "1f6c1ee0facecf9a59c878710d63c1bd",
"pkamit.github.io/.git/objects/11/dce1fe7f25546e8a15eff64c5c4c0ec87e6bc7": "8673ac87bc51c48ebd67dbaaefad94a1",
"pkamit.github.io/.git/objects/19/532c544db90d5cfc3aefe8e58921c0d4b7d850": "fb1fe174a3a2e02d05a5ca43bcec44b4",
"pkamit.github.io/.git/objects/19/a656bcbba3711212063ea2b895cd8bf6163a0b": "fcd99fe39cff9abfe03ed32d729f5c52",
"pkamit.github.io/.git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
"pkamit.github.io/.git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
"pkamit.github.io/.git/objects/26/03963382d15197aea248c66837c8f600ce3b54": "5bc094d127ecc01055b991579e35c4a3",
"pkamit.github.io/.git/objects/29/4a9b5110c64f0e30b225b0f6c3c19642f86101": "05ee0d8f5178aeab2d4125cb7d141f82",
"pkamit.github.io/.git/objects/2e/70bb476d86c83d665de93447cf0be345c04646": "362e5ab261dbe28baf91f81e5f7fdadf",
"pkamit.github.io/.git/objects/2f/19ddd8b75c40bb23c521b860bca089cc1ca7a4": "31f44b0f660ca5f197aac41b02f00c84",
"pkamit.github.io/.git/objects/31/3f2ede279694a41e005a824598c9362d5d85f8": "c5119516b92bf3842fd48151e61351f4",
"pkamit.github.io/.git/objects/31/e432bbd899685e8fcb8c1b184ce46bbf65c1fd": "8fef0a0711fba56413e72e42f4865f45",
"pkamit.github.io/.git/objects/31/ff889431dc7065cfcea14ae997d81f96d7213b": "61ddd03e3fd394d8ef94aac88fad4c8c",
"pkamit.github.io/.git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
"pkamit.github.io/.git/objects/3f/89aacef4f7125fe35144d4367493759e6a39e7": "c6aa9d7f199cd507c32bdb2460193b8c",
"pkamit.github.io/.git/objects/41/bbb91947e3dfe0937490325099bc5785417b86": "da1d247aff479653109e1ee6b7083fa5",
"pkamit.github.io/.git/objects/42/fea2ecf6ce75324e0d74dc6c40e9508d100a7b": "80eb92d691a1ff994655969e738de794",
"pkamit.github.io/.git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
"pkamit.github.io/.git/objects/46/bb74217adbddad4694819157864f5add30409b": "1f67d67f282de7b9cbc9dfdae6231b75",
"pkamit.github.io/.git/objects/47/a2c9b28785ea1d21080960600a7fcd68886202": "123785afa86cd3306db3825227290931",
"pkamit.github.io/.git/objects/49/b27ae833df8465f54210759d6d7853b2666e66": "3bd2c43306343a785730c6d6534458f9",
"pkamit.github.io/.git/objects/4b/f771bcda6cb4cda01ee46e13e031961232529e": "051fba8eb30099f54413c4a4065f3758",
"pkamit.github.io/.git/objects/4c/d18275b097a784407ad9b630f70d4c1ba5927c": "1e6ba6efcebe6b27067dad438c52e59b",
"pkamit.github.io/.git/objects/51/c7f0aaa3493979cbdfc920ad94c21282f6167c": "1fb325475494c10657f9b307df478f42",
"pkamit.github.io/.git/objects/52/869dd2cb58ea09cfa7947e833676ffabdc64bd": "a785c4a3241318c1920ffd245ace39ad",
"pkamit.github.io/.git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
"pkamit.github.io/.git/objects/57/7b9c388eef49c0983fb76544c7cfe7ed787d6a": "8043fa80b7c9c0d89eeb0a5c1ef27167",
"pkamit.github.io/.git/objects/5f/dd48ccc4d7470f91e2f1d36912a047552f1433": "9212292f9eb3f241d9b5f18632105aa1",
"pkamit.github.io/.git/objects/66/55c7d86b7e3a1137387b74f6ec191b7f22a90e": "27216e6d538bb4cd81e33960ef7c45ff",
"pkamit.github.io/.git/objects/66/cd78dc096b1a237749068bb5f6265077824db8": "e9f2a475ab50c1e89be3a18550c138ba",
"pkamit.github.io/.git/objects/68/84b03911a1a96e1d63ccd382898268e3162240": "d490fa806b8957729f9353768ab7d943",
"pkamit.github.io/.git/objects/71/33abc5acdcb388a37ce02971120e1a1adb593e": "e6b8258a32f2b91adff28d0ceeda243d",
"pkamit.github.io/.git/objects/74/dbfe46ed044d89f1e12313266c79541b358468": "0758526a26d633174904ba3a21ef386f",
"pkamit.github.io/.git/objects/75/6159085914d410c20dc878a18ab17019f98bc4": "46b253552c509f50b6fa1bd36c12a1e9",
"pkamit.github.io/.git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
"pkamit.github.io/.git/objects/7d/b0f9b3ace0216a5964fcd93941a401884b2f01": "8fd07178c91e5aeb59fc9a989799330a",
"pkamit.github.io/.git/objects/83/248cdf01655f1ed01b7ee78b14d506c41dfccf": "24e68ccd41a8789b588dbaff498c8886",
"pkamit.github.io/.git/objects/8a/169a44382806bebb15a24e540efbc7d31e058b": "f2775794ca1c50ee273def5aefdef334",
"pkamit.github.io/.git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
"pkamit.github.io/.git/objects/90/83d373edc9f76a254236630506dcb83fcb0473": "5dade4ea082987f9fca456c8fa5cf52e",
"pkamit.github.io/.git/objects/91/5e3bc52939c248e664f8078f57499a13c53e3e": "19a8329ee278d4ddbee1f6e054fc1596",
"pkamit.github.io/.git/objects/96/030823c3dc61255fb6ef4d1dc9b36ece7ffc14": "70df86dd72d2f42af6650b6b8cc0a8ae",
"pkamit.github.io/.git/objects/a8/936974ee767bf7421ad4fe6078ba5470624fe4": "690077636051d921e778ade211b3b4fb",
"pkamit.github.io/.git/objects/aa/f43758c0afe7f0d028de8b521fc92a374917be": "2b5d96a148a863c1af50706546b16622",
"pkamit.github.io/.git/objects/b2/4645d54f013ffc8a1d9a3ee8481a7b2de22b01": "cf27f048df6597151437197e1d51ef2f",
"pkamit.github.io/.git/objects/b3/d1a921ef5c41abc118860e3db6c5b8237dd9d1": "341cd734f643c0adead94d91190a073d",
"pkamit.github.io/.git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
"pkamit.github.io/.git/objects/c0/7c285c49ad09526d5cafed312ed9ddc08811ac": "1d76dca280a76a03830ab77b33cc35ea",
"pkamit.github.io/.git/objects/c0/84f743a53c0559dd10575323b16d681931192c": "ad135616d0dc0ee4d38d6dcd45db820f",
"pkamit.github.io/.git/objects/c6/118d72c35afe742b138b18fae8e441b2456e67": "cc1d3ec161d0b2c2883b62a2e2c130dd",
"pkamit.github.io/.git/objects/c6/a0bdfb3beaee3ed42b1415c9775c8c80faa5f9": "8057d5265b1008b6f697d9cedfcb64e3",
"pkamit.github.io/.git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
"pkamit.github.io/.git/objects/d0/95e20d2c6cbd09110c0d9872a03714741f6451": "67a102d40c8a1601bd76de5e77fe91d4",
"pkamit.github.io/.git/objects/d1/317f1e876faf4df0b78e2ca6f03d5ddc929a6f": "41a9980bf0df2d74bb6e5de50318fcab",
"pkamit.github.io/.git/objects/d3/d794b94a9ba34c5347f854f8eeb2f071d5487f": "22b0df79f292f96c6b246c26a104d1af",
"pkamit.github.io/.git/objects/d4/f2a3209a47ea7781f6a34e4defda0906e920f3": "af19abf35a1fa43bdf3304ffaa15eeba",
"pkamit.github.io/.git/objects/db/5f1d7d7734aab5421b4f6dfb96e030e3e238bc": "dc8342a623028a89014793593880f141",
"pkamit.github.io/.git/objects/de/6e7b2caacffb4600e30b73405df8a423d1b863": "a3fdfbdf153a5722c39be7e6d81dda3f",
"pkamit.github.io/.git/objects/ea/7ea28f64ac393d0baab5f631e2c457bc5a2ae9": "fa29b7ee6264d6f2e381d486b2bc0a2f",
"pkamit.github.io/.git/objects/ee/e14d061cc1678a8b2c77d7794b1d65a3002b11": "68979f36d5aed8e5f997f800cdabdcd6",
"pkamit.github.io/.git/objects/f4/16d681f57462596c9d44fd2812c1a9dc35a022": "e1fc3b9669be7a8667618a9e8d376da7",
"pkamit.github.io/.git/objects/f9/0d701cecbe588f01df6d5206aea9f5e1b5c950": "9669be2ea25b2cc90a7f45836894e095",
"pkamit.github.io/.git/objects/fa/4b0051c1d6266347439a9052f62cec43a4cbf3": "5fa36f9d0a422a630d3cb3401dadf915",
"pkamit.github.io/.git/objects/pack/pack-c10d80b18307f0bc9fc502e648c6271f7bf68849.idx": "ac657902ba68c624f8edf0da535ff034",
"pkamit.github.io/.git/objects/pack/pack-c10d80b18307f0bc9fc502e648c6271f7bf68849.pack": "2b02656aae8ffd45403ba9a5286ad06f",
"pkamit.github.io/.git/ORIG_HEAD": "e4c87f2117371f4e3c52a15dbe849974",
"pkamit.github.io/.git/packed-refs": "2c3beab25bda2d6ec414a06fcc360963",
"pkamit.github.io/.git/refs/heads/development": "e4c87f2117371f4e3c52a15dbe849974",
"pkamit.github.io/.git/refs/heads/main": "266d54bd2a91c94e24d129dd38a56d0d",
"pkamit.github.io/.git/refs/remotes/origin/development": "e4c87f2117371f4e3c52a15dbe849974",
"pkamit.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pkamit.github.io/.git/refs/remotes/origin/main": "266d54bd2a91c94e24d129dd38a56d0d",
"pkamit.github.io/assets/AssetManifest.json": "c0e3b5ae529dd98b140eaa39b59cef9a",
"pkamit.github.io/assets/AssetManifest.smcbin": "4a78c7fce846851e5708cf9a449e37f9",
"pkamit.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pkamit.github.io/assets/fonts/MaterialIcons-Regular.otf": "e1ae905852f09288bf014a780c6ea517",
"pkamit.github.io/assets/NOTICES": "1af80573afef828422c1c3d30314012f",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"pkamit.github.io/assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"pkamit.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f43688d81badd414d69583a4592d9b65",
"pkamit.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"pkamit.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"pkamit.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"pkamit.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"pkamit.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"pkamit.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"pkamit.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"pkamit.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"pkamit.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pkamit.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"pkamit.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"pkamit.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"pkamit.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"pkamit.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"pkamit.github.io/index.html": "26f7e4f3447b2643e596ab8380041713",
"pkamit.github.io/main.dart.js": "6c2f6e97154e68fde085f93c9504f8fd",
"pkamit.github.io/manifest.json": "697fd1fc5ca0f5d2398836ae55c57058",
"pkamit.github.io/version.json": "cf4e0d82cfc6422f44a6c81e79d725d5",
"version.json": "cf4e0d82cfc6422f44a6c81e79d725d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
