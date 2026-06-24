// =====================================
// DIGITAL MENU PERSONALIZATION SYSTEM
// MIE GACOAN SAMPIT
// =====================================

function prosesRekomendasi()
{
    // ==========================
    // AMBIL DATA FORM
    // ==========================

    const selera =
    document.getElementById("selera").value;

    const pedas =
    document.getElementById("pedas").value;

    const budget =
    document.getElementById("budget").value;

    const alergi =
    document.getElementById("alergi").value;

    const jumlahOrang =
    document.getElementById("jumlahOrang").value;

    // ==========================
    // VARIABEL
    // ==========================

    let rekomendasi = [];
    let alasan = "";
    let catatan = "";
    let saranPedas = "";

    let harga = 0;

    // ==========================
    // SARAN PEDAS
    // ==========================

    if(pedas == "1")
    {
        saranPedas =
        "🌶️ Anda tidak tahan pedas.";
    }
    else if(pedas == "2")
    {
        saranPedas =
        "🌶️ Anda tidak terlalu tahan pedas.🌶️ Disarankan meminta cabai dipisah.";
    }
    else if(pedas == "3")
    {
        saranPedas =
        "🔥 Anda menyukai makanan pedas.";
    }
    else
    {
        saranPedas =
        "🔥🔥 Anda menyukai makanan sangat pedas.";
    }

    // ==================================================
    // BUDGET < 20 RIBU
    // ==================================================

    if(budget == "1")
    {
        if(selera == "1")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Gacoan Level 0");
            }
            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Gacoan Level 1");
            }
            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Gacoan Level 2-4");
            }
            else
            {
                rekomendasi.push("🥇 Mie Gacoan Level 6-8");
            }
        }

        else if(selera == "2")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Suit");
            }
            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Suit");
                rekomendasi.push("🥈 Mie Hompimpa Level 1");
            }
            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
                rekomendasi.push("🥈 Mie Gacoan Level 2-4");
            }
            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
                rekomendasi.push("🥈 Mie Gacoan Level 6-8");
            }
        }

        else
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Suit");
            }
            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Suit");
                rekomendasi.push("🥈 Mie Hompimpa Level 1");
            }
            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
            }
            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
            }
        }

        alasan =
        "Budget kurang dari Rp20.000 sehingga direkomendasikan menu satuan.";

        harga = 18000;
    }

    // ==================================================
    // LOGIKA SELANJUTNYA
    // ==================================================
    // ==================================================
    // DATANG SENDIRI
    // ==================================================

    else if(jumlahOrang == "1")
    {
        // =====================
        // MANIS
        // =====================

        if(selera == "1")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Gacoan Level 0");
                harga = 14500;
            }

            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Paket Fest A");

                if(alergi != "3")
                {
                    rekomendasi.push("🥈 Paket Fest C");
                }

                rekomendasi.push("🥉 Mie Gacoan Level 1");

                harga = 25455;
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Gacoan Level 2-4");
                harga = 14500;
            }

            else
            {
                rekomendasi.push("🥇 Mie Gacoan Level 6-8");
                harga = 14500;
            }

            alasan =
            "Anda menyukai cita rasa manis.";
        }

        // =====================
        // GURIH
        // =====================

        else if(selera == "2")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Suit");
            }

            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Suit");
                rekomendasi.push("🥈 Mie Hompimpa Level 1");
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
                rekomendasi.push("🥈 Mie Gacoan Level 2-4");
            }

            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
                rekomendasi.push("🥈 Mie Gacoan Level 6-8");
            }

            harga = 15000;

            alasan =
            "Anda menyukai cita rasa gurih.";
        }

        // =====================
        // ASIN
        // =====================

        else if(selera == "3")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 Mie Suit");
            }

            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Suit");
                rekomendasi.push("🥈 Mie Hompimpa Level 1");
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
            }

            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
            }

            harga = 15000;

            alasan =
            "Anda menyukai cita rasa asin.";
        }
    }
    // ==================================================
    // DATANG BERDUA
    // ==================================================

    else if(jumlahOrang == "2")
    {
        // =====================
        // MANIS
        // =====================

        if(selera == "1")
        {
            if(pedas == "1")
            {
                if(alergi != "2" && alergi != "3")
                {
                    rekomendasi.push("🥇 Combat E");
                }

                rekomendasi.push("🥈 2x Mie Gacoan Level 0");

                harga = 50000;
            }

            else if(pedas == "2")
            {
                if(alergi != "2" && alergi != "3")
                {
                    rekomendasi.push("🥇 Combat A");
                    rekomendasi.push("🥈 Fest A + Fest A");

                    if(alergi != "3")
                    {
                        rekomendasi.push("🥉 Fest A + Fest C");
                    }
                }

                harga = 50000;
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 2x Mie Gacoan Level 2-4");
                harga = 30000;
            }

            else
            {
                rekomendasi.push("🥇 2x Mie Gacoan Level 6-8");
                harga = 30000;
            }

            alasan =
            "Rekomendasi dipilih berdasarkan selera manis.";
        }

        // =====================
        // GURIH
        // =====================

        else if(selera == "2")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 2x Mie Suit");
            }

            else if(pedas == "2")
            {
                rekomendasi.push("🥇 Mie Suit");
                rekomendasi.push("🥈 Mie Hompimpa Level 1");
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
                rekomendasi.push("🥈 Mie Gacoan Level 2-4");
            }

            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
                rekomendasi.push("🥈 Mie Gacoan Level 6-8");
            }

            harga = 30000;

            alasan =
            "Rekomendasi dipilih berdasarkan selera gurih.";
        }

        // =====================
        // ASIN
        // =====================

        else if(selera == "3")
        {
            if(pedas == "1")
            {
                rekomendasi.push("🥇 2x Mie Suit");
            }

            else if(pedas == "2")
            {
                if(alergi != "2" && alergi != "3")
                {
                    rekomendasi.push("🥇 Combat C");
                }

                rekomendasi.push("🥈 Mie Suit");
                rekomendasi.push("🥉 Mie Hompimpa Level 1");
            }

            else if(pedas == "3")
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 2-4");
            }

            else
            {
                rekomendasi.push("🥇 Mie Hompimpa Level 6-8");
            }

            harga = 30000;

            alasan =
            "Rekomendasi dipilih berdasarkan selera asin.";
        }
    }
    // ==================================================
    // GRUP > 2 ORANG
    // ==================================================

    else
    {
        rekomendasi.push("🥇 2 Paket Combat");
        rekomendasi.push("🥈 1 Combat + 1 Fest");
        rekomendasi.push("🥉 Menu Satuan Sesuai Selera");

        harga = 100000;

        alasan =
        "Jumlah anggota lebih dari dua orang sehingga memerlukan lebih dari satu paket.";
    }
    // ==================================================
    // FILTER ALERGI UDANG
    // ==================================================

    if(alergi == "2")
    {
        rekomendasi =
        rekomendasi.filter(item =>
            !item.includes("Fest") &&
            !item.includes("Combat")
        );
    }
    // ==================================================
    // FILTER ALERGI UDANG
    // ==================================================

    if(alergi == "2")
    {
        rekomendasi =
        rekomendasi.filter(item =>
            !item.includes("Fest") &&
            !item.includes("Combat")
        );
    }
    // ==================================================
    // FILTER ALERGI KEJU
    // ==================================================

    if(alergi == "3")
    {
        rekomendasi =
        rekomendasi.filter(item =>
            !item.includes("Fest C") &&
            !item.includes("Combat")
        );
    }
    // ==================================================
    // CATATAN ALERGI
    // ==================================================

    switch(alergi)
    {
        case "2":
            catatan =
            "🚫 Anda menghindari udang. Semua paket yang mengandung udang disembunyikan.";
            break;

        case "3":
            catatan =
            "🚫 Anda menghindari keju. Paket Fest C dan Combat tidak ditampilkan.";
            break;

        case "4":
            catatan =
            "☕ Anda tidak mengonsumsi kopi.";
            break;

        case "5":
            catatan =
            "🍫 Anda tidak mengonsumsi cokelat.";
            break;

        default:
            catatan =
            "✓ Tidak ada bahan yang dihindari.";
    }
    // ==================================================
    // PAJAK
    // ==================================================

    let pajak =
    harga * 0.10;

    let total =
    harga + pajak;
    // ==================================================
    // MEMBUAT LIST REKOMENDASI
    // ==================================================

    let daftar = "";

    rekomendasi.forEach(function(item)
    {
        daftar += `
        <li class="mb-2">
            ${item}
        </li>
        `;
    });
    // ==================================================
    // OUTPUT HTML
    // ==================================================

    let hasil = `
    <h2 class="text-2xl font-bold mb-4">
        🏆 Rekomendasi Untuk Anda
    </h2>

    <div class="bg-gray-100 rounded-2xl p-4">

        <h3 class="font-bold text-pink-600 text-lg mb-3">
            🍜 Daftar Rekomendasi
        </h3>

        <ol class="list-decimal pl-5">
            ${daftar}
        </ol>

    </div>

    <div class="mt-4 space-y-2">

        <p>
            <strong>💰 Estimasi Harga :</strong>
            Rp ${harga.toLocaleString("id-ID")}
        </p>

        <p>
            <strong>🧾 Pajak 10% :</strong>
            Rp ${pajak.toLocaleString("id-ID")}
        </p>

        <p>
            <strong>💳 Total :</strong>
            Rp ${total.toLocaleString("id-ID")}
        </p>

    </div>

    <hr class="my-4">

    <p>
        <strong>🎯 Alasan Rekomendasi</strong><br>
        ${alasan}
    </p>

    <div class="mt-3">
        ${saranPedas}
    </div>

    <div class="mt-3">
        ${catatan}
    </div>
    `;
    // ==================================================
    // TAMPILKAN HASIL
    // ==================================================

    let hasilDiv =
    document.getElementById("hasilRekomendasi");

    hasilDiv.classList.remove("hidden");

    hasilDiv.innerHTML = hasil;

    hasilDiv.scrollIntoView({
        behavior: "smooth"
    });
}