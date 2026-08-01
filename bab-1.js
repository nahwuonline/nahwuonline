const dataBab1 = {
    judul: "Pasal 1: Jenis & Pembagian Air (Anwa'ul Miyah)",
    listKata: [
        // --- PARAGRAF 1: TUJUH MACAM AIR ---
        {
            lafadzTampil: "المياه",
            lafadzLengkap: "الْمِيَاهُ",
            artiKata: "Air-air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["المِيَاهَ", "المِيَاهُ", "المِيَاهِ"], jawabanBenar: "المِيَاهُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mubtada'", "Khabar", "Maf'ul bih"], jawabanBenar: "Mubtada'" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Jamak Taksir)", "Wawu (karena Jamak Mudzakkar Salim)", "Alif (karena Isim Tatsniyah)"], jawabanBenar: "Dhammah (karena Jamak Taksir)" }
            ]
        },
        {
            lafadzTampil: "التي",
            lafadzLengkap: "الَّتِي",
            artiKata: "Yang",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["الَّتِي", "الَّتِيَ", "الَّتِىْ"], jawabanBenar: "الَّتِي" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Mubtada'"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Sukun (fi mahalli raf'in)", "Mabni Fathah (fi mahalli nasbin)", "Mabni Kasrah (fi mahalli jarrin)"], jawabanBenar: "Mabni Sukun (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "يجوز",
            lafadzLengkap: "يَجُوزُ",
            artiKata: "Boleh / sah",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["يَجُوزَ", "يَجُوزُ", "يَجُوزْ"], jawabanBenar: "يَجُوزُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Fi'il Mudhari' (Shilah Mausul)", "Fi'il Madhi", "Khabar"], jawabanBenar: "Fi'il Mudhari' (Shilah Mausul)" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (Fi'il Mudhari' sepi amil)", "Sukun (karena Majzum)", "Thubutun Nun (karena Af'alul Khamsah)"], jawabanBenar: "Dhammah (Fi'il Mudhari' sepi amil)" }
            ]
        },
        {
            lafadzTampil: "التطهير",
            lafadzLengkap: "التَّطْهِيرُ",
            artiKata: "Bersuci",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["التَّطْهِيرَ", "التَّطْهِيرُ", "التَّطْهِيرِ"], jawabanBenar: "التَّطْهِيرُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Fa'il", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Fa'il" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "ب",
            lafadzLengkap: "بِـ",
            artiKata: "Dengan / sebab",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan harakat yang tepat", opsi: ["بِـ", "بَـ", "بُـ"], jawabanBenar: "بِـ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Harf Jazam"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Kasrah", "Mabni Sukun", "Mabni Fathah"], jawabanBenar: "Mabni Kasrah" }
            ]
        },
        {
            lafadzTampil: "ها",
            lafadzLengkap: "ـهَا",
            artiKata: "Nyak (air-air itu)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["ـهَا", "ـهُ", "ـهِيَ"], jawabanBenar: "ـهَا" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Muttashil (Isim Majrur)", "Dhamir Munfashil", "Fa'il"], jawabanBenar: "Dhamir Muttashil (Isim Majrur)" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Sukun (fi mahalli jarrin)", "Mabni Fathah (fi mahalli nasbin)", "Mabni Sukun (fi mahalli raf'in)"], jawabanBenar: "Mabni Sukun (fi mahalli jarrin)" }
            ]
        },
        {
            lafadzTampil: "سبع",
            lafadzLengkap: "سَبْعُ",
            artiKata: "Tujuh",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["سَبْعَ", "سَبْعُ", "سَبْعِ"], jawabanBenar: "سَبْعُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Fa'il"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Wawu (karena Asma'ul Khamsah)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "مياه",
            lafadzLengkap: "مِيَاهٍ",
            artiKata: "Macam air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مِيَاهً", "مِيَاهٌ", "مِيَاهٍ"], jawabanBenar: "مِيَاهٍ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Tamyiz"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Jamak Taksir)", "Fathah (karena Jamak Taksir)", "Ya' (karena Jamak Mudzakkar Salim)"], jawabanBenar: "Kasrah (karena Jamak Taksir)" }
            ]
        },

        // 1. Air Hujan (ماء السماء)
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Badal", "Mubtada'", "Khabar"], jawabanBenar: "Badal" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "السماء",
            lafadzLengkap: "السَّمَاءِ",
            artiKata: "Langit (Hujan)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["السَّمَاءِ", "السَّمَاءَ", "السَّمَاءُ"], jawabanBenar: "السَّمَاءِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Maf'ul bih"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Ya' (karena Jamak Mudzakkar Salim)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 2. Air Laut (وماء البحر)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Qasam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "البحر",
            lafadzLengkap: "الْبَحْرِ",
            artiKata: "Laut",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْبَحْرِ", "الْبَحْرَ", "الْبَحْرُ"], jawabanBenar: "الْبَحْرِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Kasrah (karena Jamak Taksir)", "Ya' (karena Jamak Mudzakkar Salim)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 3. Air Sungai (وماء النهر)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "النهر",
            lafadzLengkap: "النَّهْرِ",
            artiKata: "Sungai",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["النَّهْرِ", "النَّهْرَ", "النَّهْرُ"], jawabanBenar: "النَّهْرِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 4. Air Sumur (وماء البئر)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "البئر",
            lafadzLengkap: "الْبِئْرِ",
            artiKata: "Sumur",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْبِئْرِ", "الْبِئْرَ", "الْبِئْرُ"], jawabanBenar: "الْبِئْرِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 5. Mata Air (وماء العين)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "العين",
            lafadzLengkap: "الْعَيْنِ",
            artiKata: "Mata air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْعَيْنِ", "الْعَيْنَ", "الْعَيْنُ"], jawabanBenar: "الْعَيْنِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Ya' (karena Isim Tatsniyah)", "Kasrah (karena Jamak Mu'annas Salim)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 6. Air Salju (وماء الثلج)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "الثلج",
            lafadzLengkap: "الثَّلْجِ",
            artiKata: "Salju",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الثَّلْجِ", "الثَّلْجَ", "الثَّلْجُ"], jawabanBenar: "الثَّلْجِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // 7. Air Es / Embun (وماء البرد)
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءَ", "مَاءُ", "مَاءِ"], jawabanBenar: "مَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Maf'ul bih"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "البرد",
            lafadzLengkap: "الْبَرَدِ",
            artiKata: "Es / Embun",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْبَرَدِ", "الْبَرَدَ", "الْبَرَدُ"], jawabanBenar: "الْبَرَدِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Fa'il"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },

        // --- PARAGRAF 2: PEMBAGIAN AIR KELOMPOK 4 ---
        {
            lafadzTampil: "ثم",
            lafadzLengkap: "ثُمَّ",
            artiKata: "Kemudian",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["ثُمَّ", "ثُمَُّ", "ثِمَّ"], jawabanBenar: "ثُمَّ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Nida'"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Dhammah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "المياه",
            lafadzLengkap: "الْمِيَاهُ",
            artiKata: "Air-air itu",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمِيَاهَ", "الْمِيَاهُ", "الْمِيَاهِ"], jawabanBenar: "الْمِيَاهُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mubtada'", "Khabar", "Fa'il"], jawabanBenar: "Mubtada'" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Jamak Taksir)", "Fathah (karena Jamak Taksir)", "Wawu (karena Jamak Mudzakkar Salim)"], jawabanBenar: "Dhammah (karena Jamak Taksir)" }
            ]
        },
        {
            lafadzTampil: "على",
            lafadzLengkap: "عَلَى",
            artiKata: "Atas / terbagi atas",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["عَلَى", "عَلَىَّ", "عَلِي"], jawabanBenar: "عَلَى" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Harf Jazam"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Sukun", "Mabni Fathah", "Mabni Kasrah"], jawabanBenar: "Mabni Sukun" }
            ]
        },
        {
            lafadzTampil: "أربعة",
            lafadzLengkap: "أَرْبَعَةِ",
            artiKata: "Empat",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["أَرْبَعَةَ", "أَرْبَعَةِ", "أَرْبَعَةُ"], jawabanBenar: "أَرْبَعَةِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Isim Majrur", "Mubtada'", "Khabar"], jawabanBenar: "Isim Majrur" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (kemasukan Harf Jar 'Ala)", "Fathah (karena Isim Ghairu Munsharif)", "Dhammah (karena Isim Mufrad)"], jawabanBenar: "Kasrah (kemasukan Harf Jar 'Ala)" }
            ]
        },
        {
            lafadzTampil: "أقسام",
            lafadzLengkap: "أَقْسَامٍ",
            artiKata: "Pembagian",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["أَقْسَامًا", "أَقْسَامٌ", "أَقْسَامٍ"], jawabanBenar: "أَقْسَامٍ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Tamyiz"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Jamak Taksir)", "Fathah (karena Jamak Taksir)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Kasrah (karena Jamak Taksir)" }
            ]
        },

        // --- BAGIAN KELOMPOK 1: Suci Mensucikan Tidak Makruh (طاهر مطهر غير مكروه وهو الماء المطلق) ---
        {
            lafadzTampil: "طاهر",
            lafadzLengkap: "طَاهِرٌ",
            artiKata: "Suci",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["طَاهِرًا", "طَاهِرٌ", "طَاهِرٍ"], jawabanBenar: "طَاهِرٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Na'at"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "مطهر",
            lafadzLengkap: "مُطَهِّرٌ",
            artiKata: "Mensucikan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مُطَهِّرًا", "مُطَهِّرٌ", "مُطَهِّرٍ"], jawabanBenar: "مُطَهِّرٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Badal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "غير",
            lafadzLengkap: "غَيْرُ",
            artiKata: "Bukan / tidak",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["غَيْرَ", "غَيْرُ", "غَيْرِ"], jawabanBenar: "غَيْرُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Hal", "Mubtada'"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "مكروه",
            lafadzLengkap: "مَكْرُوهٍ",
            artiKata: "Dimakruhkan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَكْرُوهًا", "مَكْرُوهٌ", "مَكْرُوهٍ"], jawabanBenar: "مَكْرُوهٍ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Maf'ul bih"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Qasam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "هو",
            lafadzLengkap: "هُوَ",
            artiKata: "Dia (air tersebut)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["هُوَ", "هِيَ", "هُمَا"], jawabanBenar: "هُوَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Munfashil (Mubtada')", "Dhamir Muttashil", "Khabar"], jawabanBenar: "Dhamir Munfashil (Mubtada')" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)", "Mabni Fathah (fi mahalli jarrin)"], jawabanBenar: "Mabni Fathah (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "الماء",
            lafadzLengkap: "الْمَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمَاءَ", "الْمَاءُ", "الْمَاءِ"], jawabanBenar: "الْمَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Badal"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "المطلق",
            lafadzLengkap: "الْمُطْلَقُ",
            artiKata: "Mutlaq (bebas)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمُطْلَقَ", "الْمُطْلَقُ", "الْمُطْلَقِ"], jawabanBenar: "الْمُطْلَقُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Hal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },

        // --- BAGIAN KELOMPOK 2: Suci Mensucikan Makruh / Musyammas (وطاهر مطهر مكروه وهو الماء المشمس) ---
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "طاهر",
            lafadzLengkap: "طَاهِرٌ",
            artiKata: "Suci",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["طَاهِرًا", "طَاهِرٌ", "طَاهِرٍ"], jawabanBenar: "طَاهِرٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Khabar"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "مطهر",
            lafadzLengkap: "مُطَهِّرٌ",
            artiKata: "Mensucikan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مُطَهِّرًا", "مُطَهِّرٌ", "مُطَهِّرٍ"], jawabanBenar: "مُطَهِّرٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Badal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "مكروه",
            lafadzLengkap: "مَكْرُوهٌ",
            artiKata: "Dimakruhkan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَكْرُوهًا", "مَكْرُوهٌ", "مَكْرُوهٍ"], jawabanBenar: "مَكْرُوهٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Hal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "هو",
            lafadzLengkap: "هُوَ",
            artiKata: "Dia",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["هُوَ", "هِيَ", "هُمَا"], jawabanBenar: "هُوَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Munfashil (Mubtada')", "Khabar", "Dhamir Muttashil"], jawabanBenar: "Dhamir Munfashil (Mubtada')" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)", "Mabni Fathah (fi mahalli jarrin)"], jawabanBenar: "Mabni Fathah (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "الماء",
            lafadzLengkap: "الْمَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمَاءَ", "الْمَاءُ", "الْمَاءِ"], jawabanBenar: "الْمَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Badal"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "المشمس",
            lafadzLengkap: "الْمُشَمَّسُ",
            artiKata: "Yang dipanaskan matahari",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمُشَمَّسَ", "الْمُشَمَّسُ", "الْمُشَمَّسِ"], jawabanBenar: "الْمُشَمَّسُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Hal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },

        // --- BAGIAN KELOMPOK 3: Suci Tidak Mensucikan / Musta'mal & Mutaghayyir (وطاهر غير مطهر وهو الماء المستعمل والمتغير بما خالطه من الطاهرات) ---
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "طاهر",
            lafadzLengkap: "طَاهِرٌ",
            artiKata: "Suci",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["طَاهِرًا", "طَاهِرٌ", "طَاهِرٍ"], jawabanBenar: "طَاهِرٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Khabar"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "غير",
            lafadzLengkap: "غَيْرُ",
            artiKata: "Tidak",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["غَيْرَ", "غَيْرُ", "غَيْرِ"], jawabanBenar: "غَيْرُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Hal", "Mubtada'"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "مطهر",
            lafadzLengkap: "مُطَهِّرٍ",
            artiKata: "Mensucikan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مُطَهِّرًا", "مُطَهِّرٌ", "مُطَهِّرٍ"], jawabanBenar: "مُطَهِّرٍ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Maf'ul bih"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "هو",
            lafadzLengkap: "هُوَ",
            artiKata: "Dia",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["هُوَ", "هِيَ", "هُمَا"], jawabanBenar: "هُوَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Munfashil (Mubtada')", "Khabar", "Dhamir Muttashil"], jawabanBenar: "Dhamir Munfashil (Mubtada')" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)", "Mabni Fathah (fi mahalli jarrin)"], jawabanBenar: "Mabni Fathah (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "الماء",
            lafadzLengkap: "الْمَاءُ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمَاءَ", "الْمَاءُ", "الْمَاءِ"], jawabanBenar: "الْمَاءُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Badal"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Jamak Taksir)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "المستعمل",
            lafadzLengkap: "الْمُسْتَعْمَلُ",
            artiKata: "Yang sudah dipakai",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمُسْتَعْمَلَ", "الْمُسْتَعْمَلُ", "الْمُسْتَعْمَلِ"], jawabanBenar: "الْمُسْتَعْمَلُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Badal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "المتغير",
            lafadzLengkap: "الْمُتَغَيِّرُ",
            artiKata: "Air yang berubah",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْمُتَغَيِّرَ", "الْمُتَغَيِّرُ", "الْمُتَغَيِّرِ"], jawabanBenar: "الْمُتَغَيِّرُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Na'at", "Mubtada'"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "ب",
            lafadzLengkap: "بِـ",
            artiKata: "Sebab / dengan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan harakat yang tepat", opsi: ["بِـ", "بَـ", "بُـ"], jawabanBenar: "بِـ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Harf Jazam"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Kasrah", "Mabni Sukun", "Mabni Fathah"], jawabanBenar: "Mabni Kasrah" }
            ]
        },
        {
            lafadzTampil: "ما",
            lafadzLengkap: "مَا",
            artiKata: "Sesuatu yang",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["مَا", "مِي", "مُو"], jawabanBenar: "مَا" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Isim Mausul (Isim Majrur)", "Ma' Nafiyah", "Ma' Syartiyah"], jawabanBenar: "Isim Mausul (Isim Majrur)" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Sukun (fi mahalli jarrin)", "Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)"], jawabanBenar: "Mabni Sukun (fi mahalli jarrin)" }
            ]
        },
        {
            lafadzTampil: "خالط",
            lafadzLengkap: "خَالَطَ",
            artiKata: "Mencampuri",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["خَالَطَ", "خَالَطُ", "خَالَطِ"], jawabanBenar: "خَالَطَ" },
                { instruksi: "Pilih bentuk / kedudukan Fa'il-nya", opsi: ["Dhamir Mustatir (Taqdiruhu Huwa)", "Isim Zhahir (الطَّاهِرَاتِ)", "Dhamir Muttashil (ـهُ)"], jawabanBenar: "Dhamir Mustatir (Taqdiruhu Huwa)" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah (Fi'il Madhi)", "Mabni Sukun (Fi'il Amar)", "Marfu' Dhammah (Fi'il Mudhari')"], jawabanBenar: "Mabni Fathah (Fi'il Madhi)" }
            ]
        },
        {
            lafadzTampil: "ه",
            lafadzLengkap: "ـهُ",
            artiKata: "Nya (air itu)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan harakat yang tepat", opsi: ["ـهُ", "ـهِ", "ـهَا"], jawabanBenar: "ـهُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Muttashil (Maf'ul bih)", "Dhamir Muttashil (Fa'il)", "Mudhaf Ilaih"], jawabanBenar: "Dhamir Muttashil (Maf'ul bih)" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Dhammah (fi mahalli nasbin)", "Mabni Sukun (fi mahalli raf'in)", "Mabni Kasrah (fi mahalli jarrin)"], jawabanBenar: "Mabni Dhammah (fi mahalli nasbin)" }
            ]
        },
        {
            lafadzTampil: "من",
            lafadzLengkap: "مِنَ",
            artiKata: "Dari",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["مِنَ", "مِنْ", "مَنَ"], jawabanBenar: "مِنَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Isim Syarth"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah ('Aridh)", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah ('Aridh)" }
            ]
        },
        {
            lafadzTampil: "الطاهرات",
            lafadzLengkap: "الطَّاهِرَاتِ",
            artiKata: "Benda-benda suci",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الطَّاهِرَاتَ", "الطَّاهِرَاتُ", "الطَّاهِرَاتِ"], jawabanBenar: "الطَّاهِرَاتِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Isim Majrur", "Maf'ul bih", "Na'at"], jawabanBenar: "Isim Majrur" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Jamak Mu'annas Salim)", "Fathah (karena Jamak Mu'annas Salim)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Jamak Mu'annas Salim)" }
            ]
        },

        // --- BAGIAN KELOMPOK 4: Air Najis & Hukum Dua Qullah ---
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "ماء",
            lafadzLengkap: "مَاءٌ",
            artiKata: "Air",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مَاءً", "مَاءٌ", "مَاءِ"], jawabanBenar: "مَاءٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Ma'thuf", "Mubtada'", "Khabar"], jawabanBenar: "Ma'thuf" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Ma'thuf 'Alaih)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Ma'thuf 'Alaih)" }
            ]
        },
        {
            lafadzTampil: "نجس",
            lafadzLengkap: "نَجِسٌ",
            artiKata: "Najis",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["نَجِسًا", "نَجِسٌ", "نَجِسٍ"], jawabanBenar: "نَجِسٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Khabar", "Badal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (mengikuti Man'ut)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "هو",
            lafadzLengkap: "هُوَ",
            artiKata: "Dia",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["هُوَ", "هِيَ", "هُمَا"], jawabanBenar: "هُوَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Munfashil (Mubtada')", "Khabar", "Dhamir Muttashil"], jawabanBenar: "Dhamir Munfashil (Mubtada')" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)", "Mabni Fathah (fi mahalli jarrin)"], jawabanBenar: "Mabni Fathah (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "الذي",
            lafadzLengkap: "الَّذِي",
            artiKata: "Yang",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["الَّذِي", "الَّذِيَ", "الَّذِىْ"], jawabanBenar: "الَّذِي" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Isim Mausul (Khabar)", "Na'at", "Mubtada'"], jawabanBenar: "Isim Mausul (Khabar)" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Sukun (fi mahalli raf'in)", "Mabni Fathah (fi mahalli nasbin)", "Mabni Sukun (fi mahalli jarrin)"], jawabanBenar: "Mabni Sukun (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "حلت",
            lafadzLengkap: "حَلَّتْ",
            artiKata: "Jatuh / bertempat",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["حَلَّتَ", "حَلَّتْ", "حَلَّتُ"], jawabanBenar: "حَلَّتْ" },
                { instruksi: "Pilih bentuk / kedudukan Fa'il-nya", opsi: ["Isim Zhahir (نَجَاسَةٌ)", "Dhamir Mustatir", "Dhamir Muttashil (تْ)"], jawabanBenar: "Isim Zhahir (نَجَاسَةٌ)" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah + Ta' Ta'nis (Fi'il Madhi)", "Mabni Sukun", "Marfu' Dhammah"], jawabanBenar: "Mabni Fathah + Ta' Ta'nis (Fi'il Madhi)" }
            ]
        },
        {
            lafadzTampil: "في",
            lafadzLengkap: "فِيـ",
            artiKata: "Di dalam",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["فِيـ", "فَـ", "فُـ"], jawabanBenar: "فِيـ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Harf Jazam"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Sukun", "Mabni Fathah", "Mabni Kasrah"], jawabanBenar: "Mabni Sukun" }
            ]
        },
        {
            lafadzTampil: "ه",
            lafadzLengkap: "ـهِ",
            artiKata: "Nya (air)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan harakat yang tepat", opsi: ["ـهِ", "ـهُ", "ـهَا"], jawabanBenar: "ـهِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Muttashil (Isim Majrur)", "Dhamir Muttashil (Maf'ul bih)", "Fa'il"], jawabanBenar: "Dhamir Muttashil (Isim Majrur)" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Kasrah (fi mahalli jarrin)", "Mabni Sukun (fi mahalli raf'in)", "Mabni Dhammah (fi mahalli nasbin)"], jawabanBenar: "Mabni Kasrah (fi mahalli jarrin)" }
            ]
        },
        {
            lafadzTampil: "نجاسة",
            lafadzLengkap: "نَجَاسَةٌ",
            artiKata: "Benda najis",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["نَجَاسَةً", "نَجَاسَةٌ", "نَجَاسَةٍ"], jawabanBenar: "نَجَاسَةٌ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Fa'il", "Maf'ul bih", "Na'at"], jawabanBenar: "Fa'il" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Padahal / dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf / Wau Haliyah", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf / Wau Haliyah" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "هو",
            lafadzLengkap: "هُوَ",
            artiKata: "Dia (air itu)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["هُوَ", "هِيَ", "هُمَا"], jawabanBenar: "هُوَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Dhamir Munfashil (Mubtada')", "Khabar", "Dhamir Muttashil"], jawabanBenar: "Dhamir Munfashil (Mubtada')" },
                { instruksi: "Pilih status mabni & mahal i'rab", opsi: ["Mabni Fathah (fi mahalli raf'in)", "Mabni Sukun (fi mahalli nasbin)", "Mabni Fathah (fi mahalli jarrin)"], jawabanBenar: "Mabni Fathah (fi mahalli raf'in)" }
            ]
        },
        {
            lafadzTampil: "دون",
            lafadzLengkap: "دُونَ",
            artiKata: "Kurang dari",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["دُونَ", "دُونُ", "دُونِ"], jawabanBenar: "دُونَ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Zharaf Makan (Khabar)", "Hal", "Maf'ul bih"], jawabanBenar: "Zharaf Makan (Khabar)" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Fathah (Zharaf Makan Manshub)", "Dhammah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Fathah (Zharaf Makan Manshub)" }
            ]
        },
        {
            lafadzTampil: "القلتين",
            lafadzLengkap: "الْقُلَّتَيْنِ",
            artiKata: "Dua qullah",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْقُلَّتَيْنِ", "الْقُلَّتَانِ", "الْقُلَّتَيْنَ"], jawabanBenar: "الْقُلَّتَيْنِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Na'at", "Maf'ul bih"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Ya' (karena Isim Tatsniyah)", "Kasrah (karena Isim Mufrad)", "Alif (karena Isim Tatsniyah)"], jawabanBenar: "Ya' (karena Isim Tatsniyah)" }
            ]
        },
        {
            lafadzTampil: "أو",
            lafadzLengkap: "أَوْ",
            artiKata: "Atau",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["أَوْ", "أَىْ", "أَوِ"], jawabanBenar: "أَوْ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Sukun", "Mabni Fathah", "Mabni Kasrah"], jawabanBenar: "Mabni Sukun" }
            ]
        },
        {
            lafadzTampil: "كان",
            lafadzLengkap: "كَانَ",
            artiKata: "Adalah dia (air itu)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["كَانَ", "كَانُ", "كَانِ"], jawabanBenar: "كَانَ" },
                { instruksi: "Pilih bentuk / kedudukan Isim Kana-nya", opsi: ["Dhamir Mustatir (Taqdiruhu Huwa)", "Isim Zhahir (الْقُلَّتَيْنِ)", "Dhamir Muttashil"], jawabanBenar: "Dhamir Mustatir (Taqdiruhu Huwa)" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah (Fi'il Madhi Naqish)", "Mabni Sukun", "Marfu' Dhammah"], jawabanBenar: "Mabni Fathah (Fi'il Madhi Naqish)" }
            ]
        },
        {
            lafadzTampil: "قلتين",
            lafadzLengkap: "قُلَّتَيْنِ",
            artiKata: "Dua qullah",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["قُلَّتَيْنِ", "قُلَّتَانِ", "قُلَّتَيْنَ"], jawabanBenar: "قُلَّتَيْنِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar Kana", "Isim Kana", "Hal"], jawabanBenar: "Khabar Kana" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Ya' (karena Isim Tatsniyah)", "Fathah (karena Isim Mufrad)", "Alif (karena Isim Tatsniyah)"], jawabanBenar: "Ya' (karena Isim Tatsniyah)" }
            ]
        },
        {
            lafadzTampil: "ف",
            lafadzLengkap: "فَـ",
            artiKata: "Lalu / maka",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan harakat yang tepat", opsi: ["فَـ", "فِـ", "فُـ"], jawabanBenar: "فَـ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "تغير",
            lafadzLengkap: "تَغَيَّرَ",
            artiKata: "Berubah",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["تَغَيَّرَ", "تَغَيَّرُ", "تَغَيَّرِ"], jawabanBenar: "تَغَيَّرَ" },
                { instruksi: "Pilih bentuk / kedudukan Fa'il-nya", opsi: ["Dhamir Mustatir (Taqdiruhu Huwa)", "Isim Zhahir", "Dhamir Muttashil"], jawabanBenar: "Dhamir Mustatir (Taqdiruhu Huwa)" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah (Fi'il Madhi)", "Mabni Sukun", "Marfu' Dhammah"], jawabanBenar: "Mabni Fathah (Fi'il Madhi)" }
            ]
        },

        // --- HUKUM RITHL BAGHDADI (والقلتان: خمس مائة رطل بغدادي تقريبا في الأصح) ---
        {
            lafadzTampil: "و",
            lafadzLengkap: "وَ",
            artiKata: "Dan",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["وَ", "وِ", "وُ"], jawabanBenar: "وَ" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Athaf", "Harf Jar", "Harf Jazam"], jawabanBenar: "Harf Athaf" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Fathah", "Mabni Sukun", "Mabni Kasrah"], jawabanBenar: "Mabni Fathah" }
            ]
        },
        {
            lafadzTampil: "القلتان",
            lafadzLengkap: "الْقُلَّتَانِ",
            artiKata: "Ukuran dua qullah itu",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْقُلَّتَانِ", "الْقُلَّتَيْنِ", "الْقُلَّتَانَ"], jawabanBenar: "الْقُلَّتَانِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mubtada'", "Khabar", "Fa'il"], jawabanBenar: "Mubtada'" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Alif (karena Isim Tatsniyah)", "Dhammah (karena Isim Mufrad)", "Ya' (karena Isim Tatsniyah)"], jawabanBenar: "Alif (karena Isim Tatsniyah)" }
            ]
        },
        {
            lafadzTampil: "خمس",
            lafadzLengkap: "خَمْسُ",
            artiKata: "Lima",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["خَمْسَ", "خَمْسُ", "خَمْسِ"], jawabanBenar: "خَمْسُ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Khabar", "Mubtada'", "Badal"], jawabanBenar: "Khabar" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Dhammah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Dhammah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "مائة",
            lafadzLengkap: "مِائَةِ",
            artiKata: "Ratus",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["مِائَةَ", "مِائَةُ", "مِائَةِ"], jawabanBenar: "مِائَةِ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Khabar", "Na'at"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Dhammah (karena Isim Mufrad)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "رطل",
            lafadzLengkap: "رِطْلٍ",
            artiKata: "Rithl (takaran)",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["رِطْلًا", "رِطْلٌ", "رِطْلٍ"], jawabanBenar: "رِطْلٍ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Mudhaf Ilaih", "Tamyiz", "Na'at"], jawabanBenar: "Mudhaf Ilaih" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (karena Isim Mufrad)", "Fathah (karena Isim Mufrad)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (karena Isim Mufrad)" }
            ]
        },
        {
            lafadzTampil: "بغدادي",
            lafadzLengkap: "بَغْدَادِيٍّ",
            artiKata: "Baghdad",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["بَغْدَادِيَّ", "بَغْدَادِيٌّ", "بَغْدَادِيٍّ"], jawabanBenar: "بَغْدَادِيٍّ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Na'at", "Mudhaf Ilaih", "Hal"], jawabanBenar: "Na'at" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (mengikuti Man'ut)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Kasrah (mengikuti Man'ut)" }
            ]
        },
        {
            lafadzTampil: "تقريبا",
            lafadzLengkap: "تَقْرِيبًا",
            artiKata: "Kira-kira",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["تَقْرِيبً", "تَقْرِيبًا", "تَقْرِيبٍ"], jawabanBenar: "تَقْرِيبًا" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Hal", "Khabar", "Na'at"], jawabanBenar: "Hal" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Fathah (Hal Manshub)", "Dhammah (karena Isim Mufrad)", "Kasrah (karena Isim Mufrad)"], jawabanBenar: "Fathah (Hal Manshub)" }
            ]
        },
        {
            lafadzTampil: "في",
            lafadzLengkap: "فِي",
            artiKata: "Dalam / menurut",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih bacaan yang tepat", opsi: ["فِي", "فَ", "فُ"], jawabanBenar: "فِي" },
                { instruksi: "Pilih jenis huruf", opsi: ["Harf Jar", "Harf Athaf", "Zharaf"], jawabanBenar: "Harf Jar" },
                { instruksi: "Pilih status mabni", opsi: ["Mabni Sukun", "Mabni Fathah", "Mabni Kasrah"], jawabanBenar: "Mabni Sukun" }
            ]
        },
        {
            lafadzTampil: "الأصح",
            lafadzLengkap: "الْأَصَحِّ",
            artiKata: "Pendapat yang paling sahih",
            sudahDihitungCombo: false,
            isDone: false,
            tahapan: [
                { instruksi: "Pilih harakat yang tepat", opsi: ["الْأَصَحَّ", "الْأَصَحُّ", "الْأَصَحِّ"], jawabanBenar: "الْأَصَحِّ" },
                { instruksi: "Pilih kedudukan (tarkib)", opsi: ["Isim Majrur", "Na'at", "Mudhaf Ilaih"], jawabanBenar: "Isim Majrur" },
                { instruksi: "Pilih tanda i'rab & alasan", opsi: ["Kasrah (kemasukan Harf Jar Fi)", "Fathah (karena Isim Ghairu Munsharif)", "Kasrah (karena Jamak Taksir)"], jawabanBenar: "Kasrah (kemasukan Harf Jar Fi)" }
            ]
        }
    ]
};