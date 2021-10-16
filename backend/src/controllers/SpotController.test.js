const SpotController = require("./SpotController")
// @ponicode
describe("SpotController.index", () => {
    test("0", async () => {
        await SpotController.index({ query: "DELETE FROM Projects WHERE pid = %s" }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("1", async () => {
        await SpotController.index({ query: "UPDATE Projects SET pname = %s WHERE pid = %s" }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        await SpotController.index({ query: "UNLOCK TABLES;" }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("3", async () => {
        await SpotController.index({ query: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';" }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("4", async () => {
        await SpotController.index({ query: "UNLOCK TABLES;" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await SpotController.index(undefined, undefined)
    })
})

// @ponicode
describe("SpotController.delete", () => {
    test("0", async () => {
        await SpotController.delete({ params: ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t=", "www.google.com"] }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("1", async () => {
        await SpotController.delete({ params: ["https://api.telegram.org/", "https://", "https://croplands.org/app/a/confirm?t="] }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        await SpotController.delete({ params: ["http://base.com", "https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"] }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("3", async () => {
        await SpotController.delete({ params: ["https://croplands.org/app/a/reset?token=", "https://", "Www.GooGle.com"] }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("4", async () => {
        await SpotController.delete({ params: ["http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/", "http://www.example.com/route/123?foo=bar"] }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("5", async () => {
        await SpotController.delete(undefined, undefined)
    })
})

// @ponicode
describe("SpotController.store", () => {
    test("0", async () => {
        await SpotController.store({ file: "decoder.hh", body: false, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, { status: () => 404, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("1", async () => {
        await SpotController.store({ file: "InfoPlist.strings", body: true, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, { status: () => 404, json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        await SpotController.store({ file: "navix377.py", body: false, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" } }, { status: () => 500, json: () => "\"[3,\"false\",false]\"" })
    })

    test("3", async () => {
        await SpotController.store({ file: "decoder.cc", body: false, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36" } }, { status: () => 500, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("4", async () => {
        await SpotController.store({ file: ":", body: true, headers: { User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36", Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", Accept-Language: "en-US,en;q=0.5", Connection: "keep-alive", Upgrade-Insecure-Requests: 1, Pragma: "no-cache", Cache-Control: "no-cache" } }, { status: () => 404, json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("5", async () => {
        await SpotController.store(undefined, { status: () => Infinity, json: () => "" })
    })
})
