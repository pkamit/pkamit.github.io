'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0dee72bc3cb7bafe9939ddffc7f59ade",
".git/config": "4d5e3da1ef09645d25a32b7e1e3acd54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c18f16c5e1cbf7cb11b5935d561812dd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "eb2019cea236999afcc62df9948e17a2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c17d3b2fba8d767e5ed053b40dacb01",
".git/logs/refs/heads/main": "d534f0df3545bff84042ceb8f1c26919",
".git/logs/refs/heads/master": "fd3a5a4cfdd13ffa5f55054e3e86bd1d",
".git/logs/refs/remotes/origin/HEAD": "a4330d9428ad89fd6f32de47cca8f76c",
".git/logs/refs/remotes/origin/main": "a3f38cbff73affa7ff584b3347f9705e",
".git/logs/refs/remotes/origin/master": "f0fb5455a9509f22e36faab2dcd07a48",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/985a40d7eac062388ce6ed647d8355bd6db6d7": "6b4ba402126ce660797331fc8083adcd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/17/cf724388a16af614046c6549995d261be885c0": "25a884fd0212d9ca008e57993a6e2e6f",
".git/objects/1c/3882cd4286eb8c319f5d6e2876d197d0899480": "76ab857ccbffc672bfe3456267fe712e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/28/8fe9b973b48c28876e10ec3b18246a2ffbbdad": "af18cce187baa71be435ca9c217f17b4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
".git/objects/3c/6439379c017fceb2d56c131ad0937a6a3ad6e7": "d12ce6cbd6f90b3370afea8b80130c37",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/57/e649f6c5992122a5069544e0450150f993b882": "58da047c9d2c66b644225143ac865e6c",
".git/objects/5a/d097e67c05d3c4940cf8cc8af7fd11094f4ad5": "d1744587b181b88227b84f11fe74d6ee",
".git/objects/5d/565120f2307624fd09430d9b9b5d7598909e11": "94e618a727acf652449940120896dff9",
".git/objects/60/e54a6f4789c664b80906ee8f0a8c7e71d3335f": "0e82648f08ae472a47f9d4b975c797ea",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/bba6dd711398b4f7b91f20658fb7810a072a00": "89883dec9a16f3654a9ac49a17f1f746",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7c/39e6d3a3d19d32ea61db22da7d3969b486a31c": "26ee45e3856084fa7167d2f940410c91",
".git/objects/7d/4b1671e9ad26dfd77722216a0153c848827b2f": "aa22ae2fbd23c6dc3d54ec3a33f31bd4",
".git/objects/80/adaaa47ff33b97e18bf9132d127274fd7b4123": "c92b7ae2bdc93a227a077cbb7dad0817",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2ed51c67c81d437479ee2e97e61e05cf60a862": "6cabb803739958544b5fcf798c29021c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/337c59936f937e73703a40bda54d3f7f592ec1": "c1949cfabce421c72d08a00523a91f46",
".git/objects/8f/74c87cfed277e332515c759e1b4797c46061ad": "b4273c6a5484baad31cba16225e0f847",
".git/objects/92/e521d238cf8f9991b9fa0b0390a716bbe11038": "bf3f5f3c435371c21f1678b4dd287eac",
".git/objects/93/b7e91c642008b580224295b1f5040251ff7725": "128dd175bf93d7b3c66212c4d7f62aeb",
".git/objects/94/17d5cd37de9423642cb607d556c4669d4186c3": "5904ca38711d6a88789652c5310e903a",
".git/objects/9a/cf6a870beadc0fce1577214e598afe0d0f4b2b": "ffa5629c9e0fcf1ae5ff1d5ec214bfd6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/9ecc70403ab43515be9c56e96b38f0a9eb6838": "54247399353531a4b66fd4ec426c297d",
".git/objects/b7/1c6c9d88c94338f4051581ebd428670630523a": "ad493bb2d5662765a690322ea9856ebd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0caf69bd09043b4ba5bec162e191ca2d73a735": "b71d55cb24ede99045f346e7e9ee4e7c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/3e6a6eaffbcccdfd692120d2d9d6b3a843a792": "41bdf93bfbf0bbf24a0ed6efebe6ee47",
".git/objects/c0/7b4b03ddeb4b3b2f140ea1974f47a7e6df74e4": "cfe92be9205e4f85a51c7477c287e93c",
".git/objects/c1/0a78c9ac3f2c9d9273a573a756c869c05e2976": "6ecb82a618bd3e45e6c5b56a91244020",
".git/objects/c1/c71a7ea3dc8bafc50d9e25e4ea793dc01fae03": "35eb3ef1cbfc75fa274908d23ce978ce",
".git/objects/c3/fc6124b6f6f5290774d0d05db538331642debd": "4d8634ad25288b2a7bbc20c743dc26ac",
".git/objects/cd/e44b5c19c7dac2dd75f6b6ab9f60796a5c19b4": "3a1091f9ab13ff2e1abab8b7a0078074",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/8c7971a8dd69ce9465dd66e2068601144d6a32": "07a6683b6beec9cba78de50e09a67bd1",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5045587fbabca97fbd531c485070251884043a": "c5e580e2d5ebd2ee9add86cda5bb1633",
".git/objects/f1/19b39647521b5c0aa100433e332880da07f2ac": "89d5d5719c3af4afc6afcd708bd365da",
".git/objects/f4/ee2f6db197e1e1d01418963566340e444ea393": "695c36f022b8828be7e09311e783f392",
".git/ORIG_HEAD": "ad3ee5ccd8db339064581025c41ccdae",
".git/refs/heads/main": "c19a89f43cf1c636e919d98fc66241d6",
".git/refs/heads/master": "ad3ee5ccd8db339064581025c41ccdae",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c19a89f43cf1c636e919d98fc66241d6",
".git/refs/remotes/origin/master": "ad3ee5ccd8db339064581025c41ccdae",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "745e81cfb0100cc145793f5f90a5a323",
"assets/NOTICES": "42064ec21f785eda982558f14e14736f",
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
"index.html": "039cdaeac1bd23c4aefab5f8e598baa6",
"/": "039cdaeac1bd23c4aefab5f8e598baa6",
"main.dart.js": "b32c9cafdd735db3f1403b250466a1b3",
"manifest.json": "697fd1fc5ca0f5d2398836ae55c57058",
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
