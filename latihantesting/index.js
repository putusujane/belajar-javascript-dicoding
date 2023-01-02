// Menulis kode pengujian

//Segmen
test("Deskripsi dari testcase kamu.", () => {
    expect(perintah).matcher(nilaiYangDieksptetasikan);
});

// Contoh
test("Satu ditambah satu samadengan dua", () => {
    expect(1 + 1).toBe(2);
});

// Test secara grouping
describe('Pengujian olah aritmatika', () => {
    test("#1 Dua ditambah dua samadengan empat.", () => {
        expect(2 + 2).toBe(4);
    });

    test("#2 Lima dikali lima samadengan duapuluh lima.", () => {
        expect(5 * 5).toBe(25);
    });
});