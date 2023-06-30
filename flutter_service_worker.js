'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a37326b3c3d2bc5d934402869e6f8e82",
"assets/NOTICES": "edf19ca8a99f50591a40bb6bf9651dc3",
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
"index.html": "6cfcc28504bd264fca13f376bd4ed365",
"/": "9287f4d32f226c7ec8ce66bb7440b477",
"main.dart.js": "022aae6d9f9513604e9d91b892d1dc82",
"manifest.json": "697fd1fc5ca0f5d2398836ae55c57058",
"pkamit.github.io/.git/COMMIT_EDITMSG": "332635c0e6c7ec33d550b634b7def7ad",
"pkamit.github.io/.git/config": "7d581107b9a028171a8a6547368917ed",
"pkamit.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"pkamit.github.io/.git/FETCH_HEAD": "370223bcdf73b406b12ad8d693a58592",
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
"pkamit.github.io/.git/index": "3d9e7876caff52168ff09f84a832d9be",
"pkamit.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pkamit.github.io/.git/logs/HEAD": "5c142d9781191552826d9eada43c6367",
"pkamit.github.io/.git/logs/refs/heads/main": "5c142d9781191552826d9eada43c6367",
"pkamit.github.io/.git/logs/refs/remotes/origin/HEAD": "306aae7807104822881ce67810f93705",
"pkamit.github.io/.git/logs/refs/remotes/origin/main": "09da415d45a696d32e7d1c85ad0913c1",
"pkamit.github.io/.git/objects/14/86785fcf2100ab6a392fe9662c44a680a04d72": "b8a817e64fba92c2d75ad2c2ff20d4cf",
"pkamit.github.io/.git/objects/25/951498a27d1ead067634fc50752679fe30514a": "0413623b46c311b3df8f84cad8441a36",
"pkamit.github.io/.git/objects/32/ddad738128cfdccec76a2b710e70c6d934c713": "d702a4865db6638800ee2ab5f58fd6d5",
"pkamit.github.io/.git/objects/33/3aec11025e8f87bdf5694d141c2165b58a501b": "b9ae794a13a874ef5c8653f13086e698",
"pkamit.github.io/.git/objects/39/05569445a90681c119728b64a4d30a78f11348": "cd9e46908db6cd83502ff95a0b7dbd70",
"pkamit.github.io/.git/objects/49/bde8f58197b1d2a4ca86808513238535caca63": "4649311e78e7681229cca6203a9189c3",
"pkamit.github.io/.git/objects/74/ffc1da4f2364789dfbc2aedb701874b547b62c": "8c6f549bcf406ec326019235cd3058b1",
"pkamit.github.io/.git/objects/7b/eba5380378a7d17fd09d379cb6694154b04f1d": "ed884bfffbf0fae18e15aff7c1a88165",
"pkamit.github.io/.git/objects/80/663dabe8a4ef912717ea7e900e9124aa254b44": "a8830add511e9e8cf802a8a9ba0f4d12",
"pkamit.github.io/.git/objects/de/be893b0531fd31dbb42a8409d19025dff46314": "3b7eb1225df3a0ca03d4254ec92e3e3f",
"pkamit.github.io/.git/objects/pack/pack-cb70977936b93fa19fa561e71b185fb27df4be42.idx": "f910f3c5922147a7705451e3d61e6f16",
"pkamit.github.io/.git/objects/pack/pack-cb70977936b93fa19fa561e71b185fb27df4be42.pack": "09a328783ea7a38117ef64f8385e7700",
"pkamit.github.io/.git/ORIG_HEAD": "4339b667f55eebf67b84bb0fd60a1191",
"pkamit.github.io/.git/packed-refs": "177ab0fa4921636613567c213561b81c",
"pkamit.github.io/.git/refs/heads/main": "4b748f47a040b6cd6e9b1e74b1718472",
"pkamit.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pkamit.github.io/.git/refs/remotes/origin/main": "4b748f47a040b6cd6e9b1e74b1718472",
"pkamit.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"pkamit.github.io/assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"pkamit.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pkamit.github.io/assets/fonts/MaterialIcons-Regular.otf": "a37326b3c3d2bc5d934402869e6f8e82",
"pkamit.github.io/assets/NOTICES": "edf19ca8a99f50591a40bb6bf9651dc3",
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
"pkamit.github.io/index.html": "9287f4d32f226c7ec8ce66bb7440b477",
"pkamit.github.io/main.dart.js": "499633da9cbbaad1712967ed46f13296",
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
