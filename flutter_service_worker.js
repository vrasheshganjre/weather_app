'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "dae412191356a938d12aec62db4d6567",
"assets/assets/images/night/374.png": "f9a371b6e3e519e77bdcb8690060a1ef",
"assets/assets/images/night/332.png": "de0abf06e2e3706c036f27528b4967d9",
"assets/assets/images/night/260.png": "bc09b959d85a6c1638a08e60779472ed",
"assets/assets/images/night/182.png": "e8686576a4b82f7ea05e277d09c95ac9",
"assets/assets/images/night/200.png": "339d04e904a6efe9a61a0e0a5ab75c48",
"assets/assets/images/night/293.png": "89b144234044ef233ce9e483ce88211b",
"assets/assets/images/night/230.png": "c38df34f171bc8b90ddf5c371bf5e6ca",
"assets/assets/images/night/335.png": "ffa630da43031adf5096f10b73ac87c5",
"assets/assets/images/night/263.png": "9f8499141891c53eee48a5b725249c32",
"assets/assets/images/night/305.png": "3abbcd06a2cd9458a38b990e6d86db1d",
"assets/assets/images/night/326.png": "de0abf06e2e3706c036f27528b4967d9",
"assets/assets/images/night/185.png": "db71b128adf434be11f2ff2fc9ac9de1",
"assets/assets/images/night/362.png": "e8686576a4b82f7ea05e277d09c95ac9",
"assets/assets/images/night/227.png": "adc36b97e8c486d982358580e54e0fd6",
"assets/assets/images/night/317.png": "d35f977b76262728d022eb16b755e41d",
"assets/assets/images/night/356.png": "3abbcd06a2cd9458a38b990e6d86db1d",
"assets/assets/images/night/119.png": "e31fd0a9c67b6624445c1156bc47e6f0",
"assets/assets/images/night/266.png": "9f8499141891c53eee48a5b725249c32",
"assets/assets/images/night/338.png": "106f8062ebf6a9456cd176f4d5577d2a",
"assets/assets/images/night/377.png": "3ac01a1c401a6868724f001ae996c01a",
"assets/assets/images/night/281.png": "db71b128adf434be11f2ff2fc9ac9de1",
"assets/assets/images/night/302.png": "76f14c43b7d223423d2c8bf51b50bcd1",
"assets/assets/images/night/368.png": "ffa630da43031adf5096f10b73ac87c5",
"assets/assets/images/night/296.png": "76f14c43b7d223423d2c8bf51b50bcd1",
"assets/assets/images/night/359.png": "6de75e56fda8490961dfc887e26676f2",
"assets/assets/images/night/389.png": "44fa8ba85a80524948bd0f0c163a4780",
"assets/assets/images/night/116.png": "0f91243b8d5ca24242bd3602022ec960",
"assets/assets/images/night/179.png": "ffa630da43031adf5096f10b73ac87c5",
"assets/assets/images/night/299.png": "89b144234044ef233ce9e483ce88211b",
"assets/assets/images/night/308.png": "7c235ab18bc1fc4067713a0ac9422807",
"assets/assets/images/night/350.png": "eda7fd0a4e7701cc720d2e449022543d",
"assets/assets/images/night/122.png": "0d016a47abefe0792d90ca2f88961efa",
"assets/assets/images/night/329.png": "ffa630da43031adf5096f10b73ac87c5",
"assets/assets/images/night/248.png": "7551637a3167fc4695b98392607e0e28",
"assets/assets/images/night/386.png": "339d04e904a6efe9a61a0e0a5ab75c48",
"assets/assets/images/night/284.png": "c0f1313a009d76cfb28398bac584c9c3",
"assets/assets/images/night/365.png": "88bfb77de7401bf632c6a29cc798b3b5",
"assets/assets/images/night/143.png": "805d70d7b0cc1f277655876b41406e54",
"assets/assets/images/night/176.png": "89b144234044ef233ce9e483ce88211b",
"assets/assets/images/night/353.png": "89b144234044ef233ce9e483ce88211b",
"assets/assets/images/night/314.png": "7f4b90169c1cbd1ad82a0f975bb30f55",
"assets/assets/images/night/371.png": "0005cc166922344405e3c85eff9d6a34",
"assets/assets/images/night/311.png": "7f4b90169c1cbd1ad82a0f975bb30f55",
"assets/assets/images/night/113.png": "5198763686edef38b3d5edb4e7b478c1",
"assets/assets/images/night/323.png": "ffa630da43031adf5096f10b73ac87c5",
"assets/assets/images/night/392.png": "c2cf3ac588fa07ed174be33986301431",
"assets/assets/images/night/Thumbs.db": "825fbc734655f315c48a032478eaca6e",
"assets/assets/images/night/320.png": "d35f977b76262728d022eb16b755e41d",
"assets/assets/images/night/395.png": "eaa70a0298a3f4af8119133b93a63b4c",
"assets/assets/images/day/374.png": "59e5d235ed463353173c0de8e51c3347",
"assets/assets/images/day/332.png": "959892fdfe896ed89dd35dfcab9fe0c2",
"assets/assets/images/day/260.png": "c7daa3a82888c4bcdb902a17e3adf2f1",
"assets/assets/images/day/182.png": "cf2c5003a927142822045584f328d44b",
"assets/assets/images/day/200.png": "d24fc4b3fddc64e97efb987418a35b3b",
"assets/assets/images/day/293.png": "f94bb7f98313d8b27bd1bfe3670f648d",
"assets/assets/images/day/230.png": "bff38e19736b052e8a2428e9f64eccdb",
"assets/assets/images/day/335.png": "3d99c3286365e8204a311ddda40f537f",
"assets/assets/images/day/263.png": "463c3af1b625f94092f858aacdeda1b6",
"assets/assets/images/day/305.png": "5afb09a36dd28422e02f7c4e37bba6cc",
"assets/assets/images/day/326.png": "959892fdfe896ed89dd35dfcab9fe0c2",
"assets/assets/images/day/185.png": "15a2d1814b8387b39f9fe48098e5fe58",
"assets/assets/images/day/362.png": "cf2c5003a927142822045584f328d44b",
"assets/assets/images/day/227.png": "b4d09fd4c20b66653fd990210af4aad2",
"assets/assets/images/day/317.png": "b9a0e7136538cbc60c764a7f21375f5b",
"assets/assets/images/day/356.png": "5afb09a36dd28422e02f7c4e37bba6cc",
"assets/assets/images/day/119.png": "dbb270f8d4f62c7c25269173edb0a917",
"assets/assets/images/day/266.png": "463c3af1b625f94092f858aacdeda1b6",
"assets/assets/images/day/338.png": "a369e24be18da2bb35d9cc876559decf",
"assets/assets/images/day/377.png": "034ccd1a9a7a200fc34bd9464db09ed0",
"assets/assets/images/day/281.png": "15a2d1814b8387b39f9fe48098e5fe58",
"assets/assets/images/day/302.png": "1cf862e3dc265edcdedecec988d52005",
"assets/assets/images/day/368.png": "4e0ed0111042a882412e4becbb81c28f",
"assets/assets/images/day/296.png": "1cf862e3dc265edcdedecec988d52005",
"assets/assets/images/day/359.png": "f72c3a36573d8810f178a7e6e9cdfed3",
"assets/assets/images/day/389.png": "5addee672c9d475d4d68bf35f190054b",
"assets/assets/images/day/116.png": "65af3e329263c6a08eb818c47a2cd3cd",
"assets/assets/images/day/179.png": "4e0ed0111042a882412e4becbb81c28f",
"assets/assets/images/day/299.png": "f94bb7f98313d8b27bd1bfe3670f648d",
"assets/assets/images/day/308.png": "6f4a95fb24760c1600646a926e0b75c0",
"assets/assets/images/day/350.png": "e4173f2aa003a0774b4988c3d386633d",
"assets/assets/images/day/122.png": "ca50147b06655322bbfe0ad4fddcfd6f",
"assets/assets/images/day/329.png": "4e0ed0111042a882412e4becbb81c28f",
"assets/assets/images/day/248.png": "68272754c5d8db767dc4d1d7acd95e33",
"assets/assets/images/day/386.png": "d24fc4b3fddc64e97efb987418a35b3b",
"assets/assets/images/day/284.png": "2dbdd9f707ea873b5b2ab3d3d9e4dfa9",
"assets/assets/images/day/365.png": "c5d7fe3668525406b932abd505e6df48",
"assets/assets/images/day/143.png": "a08f02aaa19e8496e0cbb563b1e428be",
"assets/assets/images/day/176.png": "f94bb7f98313d8b27bd1bfe3670f648d",
"assets/assets/images/day/353.png": "f94bb7f98313d8b27bd1bfe3670f648d",
"assets/assets/images/day/314.png": "83aa6ac5af884d406c83690605d76e66",
"assets/assets/images/day/371.png": "3d99c3286365e8204a311ddda40f537f",
"assets/assets/images/day/311.png": "83aa6ac5af884d406c83690605d76e66",
"assets/assets/images/day/113.png": "f332afa37a54708cb83a860b523a779a",
"assets/assets/images/day/323.png": "4e0ed0111042a882412e4becbb81c28f",
"assets/assets/images/day/392.png": "7d49024bd73f1e11c769d445cd428341",
"assets/assets/images/day/320.png": "b9a0e7136538cbc60c764a7f21375f5b",
"assets/assets/images/day/395.png": "eaa70a0298a3f4af8119133b93a63b4c",
"assets/AssetManifest.json": "1f0ecdc3aa4d7f979ade03e037d087db",
"assets/NOTICES": "9b29643c3e116962fc5e5e288c0ad205",
"assets/AssetManifest.bin": "8973d64e6c8bb61a4061b71f882d1006",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "df5d55af2f7589da27cce300654e4b1f",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "47599668ab8277c16ef930b9c6200a18",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "5327b021a464c66a962d38cc66194556",
"index.html": "a18b4216e72015f9d8b845e3b4753edf",
"/": "a18b4216e72015f9d8b845e3b4753edf",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
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
