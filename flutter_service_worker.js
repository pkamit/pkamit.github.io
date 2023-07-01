'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "f49f1332fd97c6ac5f6f3d6216c3e935",
"assets/AssetManifest.smcbin": "5c7cbb7f85d9cfd4ea4d4a2ab546d317",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "745e81cfb0100cc145793f5f90a5a323",
"assets/NOTICES": "f85862900b5a2c88d62b7b319285dcb5",
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
"index.html": "49a9dadf5c5e548c05698b545283ef13",
"/": "32df0dab2dd2d7e7be7b89e909c5e0e1",
"main.dart.js": "8983522f456836835afdf8385fd9630b",
"manifest.json": "697fd1fc5ca0f5d2398836ae55c57058",
"pkamit.github.io/.git/COMMIT_EDITMSG": "19e73828937f05e6f709e29efdb0a82b",
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
"pkamit.github.io/.git/index": "5b59572323ab436d042030d5f8db06e8",
"pkamit.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pkamit.github.io/.git/logs/HEAD": "55704ff41b0f601d5919e982b9bd443a",
"pkamit.github.io/.git/logs/refs/heads/main": "55704ff41b0f601d5919e982b9bd443a",
"pkamit.github.io/.git/logs/refs/remotes/origin/HEAD": "790c370ecc5f90dbd85f6b187c36eb4f",
"pkamit.github.io/.git/logs/refs/remotes/origin/main": "264ace79f853caf288c30b49e695c7be",
"pkamit.github.io/.git/objects/11/dce1fe7f25546e8a15eff64c5c4c0ec87e6bc7": "8673ac87bc51c48ebd67dbaaefad94a1",
"pkamit.github.io/.git/objects/19/532c544db90d5cfc3aefe8e58921c0d4b7d850": "fb1fe174a3a2e02d05a5ca43bcec44b4",
"pkamit.github.io/.git/objects/26/03963382d15197aea248c66837c8f600ce3b54": "5bc094d127ecc01055b991579e35c4a3",
"pkamit.github.io/.git/objects/2f/19ddd8b75c40bb23c521b860bca089cc1ca7a4": "31f44b0f660ca5f197aac41b02f00c84",
"pkamit.github.io/.git/objects/31/3f2ede279694a41e005a824598c9362d5d85f8": "c5119516b92bf3842fd48151e61351f4",
"pkamit.github.io/.git/objects/3f/89aacef4f7125fe35144d4367493759e6a39e7": "c6aa9d7f199cd507c32bdb2460193b8c",
"pkamit.github.io/.git/objects/46/bb74217adbddad4694819157864f5add30409b": "1f67d67f282de7b9cbc9dfdae6231b75",
"pkamit.github.io/.git/objects/aa/f43758c0afe7f0d028de8b521fc92a374917be": "2b5d96a148a863c1af50706546b16622",
"pkamit.github.io/.git/objects/b3/d1a921ef5c41abc118860e3db6c5b8237dd9d1": "341cd734f643c0adead94d91190a073d",
"pkamit.github.io/.git/objects/c0/84f743a53c0559dd10575323b16d681931192c": "ad135616d0dc0ee4d38d6dcd45db820f",
"pkamit.github.io/.git/objects/c6/a0bdfb3beaee3ed42b1415c9775c8c80faa5f9": "8057d5265b1008b6f697d9cedfcb64e3",
"pkamit.github.io/.git/objects/d0/95e20d2c6cbd09110c0d9872a03714741f6451": "67a102d40c8a1601bd76de5e77fe91d4",
"pkamit.github.io/.git/objects/db/5f1d7d7734aab5421b4f6dfb96e030e3e238bc": "dc8342a623028a89014793593880f141",
"pkamit.github.io/.git/objects/f4/16d681f57462596c9d44fd2812c1a9dc35a022": "e1fc3b9669be7a8667618a9e8d376da7",
"pkamit.github.io/.git/objects/f9/0d701cecbe588f01df6d5206aea9f5e1b5c950": "9669be2ea25b2cc90a7f45836894e095",
"pkamit.github.io/.git/objects/pack/pack-c10d80b18307f0bc9fc502e648c6271f7bf68849.idx": "ac657902ba68c624f8edf0da535ff034",
"pkamit.github.io/.git/objects/pack/pack-c10d80b18307f0bc9fc502e648c6271f7bf68849.pack": "2b02656aae8ffd45403ba9a5286ad06f",
"pkamit.github.io/.git/ORIG_HEAD": "8f65a5a1775625bd1b80cacb5fa807d1",
"pkamit.github.io/.git/packed-refs": "2c3beab25bda2d6ec414a06fcc360963",
"pkamit.github.io/.git/refs/heads/main": "62c119363037481ee5051ea8b6a2cf6c",
"pkamit.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pkamit.github.io/.git/refs/remotes/origin/main": "62c119363037481ee5051ea8b6a2cf6c",
"pkamit.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"pkamit.github.io/assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"pkamit.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pkamit.github.io/assets/fonts/MaterialIcons-Regular.otf": "a37326b3c3d2bc5d934402869e6f8e82",
"pkamit.github.io/assets/NOTICES": "3107766760477d33aee42d7b700022ae",
"pkamit.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f43688d81badd414d69583a4592d9b65",
"pkamit.github.io/assets/shaders/ink_sparkle.frag": "9851c5ed1da0cd856f0a970c4ceae2ab",
"pkamit.github.io/canvaskit/canvaskit.js": "2530e95ad88e471d9aa975ddc1db129e",
"pkamit.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"pkamit.github.io/canvaskit/chromium/canvaskit.js": "3de7f403fb78f28baf27270fe5047484",
"pkamit.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"pkamit.github.io/canvaskit/skwasm.js": "34e34e7a2e189187d41369f3205ddb7c",
"pkamit.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"pkamit.github.io/canvaskit/skwasm.worker.js": "b3863a3012fce5442e482648e7f6e763",
"pkamit.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pkamit.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"pkamit.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"pkamit.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"pkamit.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"pkamit.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"pkamit.github.io/index.html": "32df0dab2dd2d7e7be7b89e909c5e0e1",
"pkamit.github.io/main.dart.js": "c771f7ab1f3a6e94db30cd04c29428d8",
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
