const messages = {
  id: {
    translations: {
      common: {
        search: "Cari",
        edit: "Edit",
        delete: "Hapus",
        cancel: "Batal",
        save: "Simpan",
        confirm: "Konfirmasi",
        close: "Tutup",
        error: "Kesalahan",
        success: "Sukses",
        actions: "Aksi",
        add: "Tambah",
        name: "Nama",
        email: "Email",
        phone: "Telepon",
        company: "Perusahaan",
        connection: "Koneksi",
        queue: "Antrian",
        noqueue: "Tanpa Antrian",
        contact: "Kontak",
        user: "User",
        whatsappNumber: "Nomor Whatsapp",
        dueDate: "Jatuh tempo",
        copy: "Salin",
        paste: "Tempel",
        proceed: "Lanjutkan",
        enabled: "Diaktifkan",
        disabled: "Dinonaktifkan",
        rating: "Penilaian",
        transferTo: "Alihkan ke",
        chat: "Percakapan",
        plan: "Paket",
        status: "Status",
        clear: "Bersihkan",
        accessAs: "Akses sebagai",
        createdAt: "Dibuat Pada",
        price: "Harga",
      },
      signup: {
        title: "Daftar",
        toasts: {
          success: "Pengguna berhasil dibuat! Masuk sekarang!",
          fail: "Kesalahan saat membuat pengguna. Periksa data yang diberikan.",
        },
        form: {
          name: "Nama",
          email: "Email",
          password: "Kata Sandi",
          phone: "Nomor Telepon dengan Kode Negara (+62)",
          plan: "Paket",
          atendentes: "Customer Service",
          whatsApp: "Jumlah nomor WA",
          queue: "Jumlah antrian",
          currency: "Rp. ",
        },
        buttons: {
          submit: "Daftar",
          login: "Sudah punya akun? Masuk!",
        },
      },
      login: {
        title: "Masuk",
        form: {
          email: "Email",
          password: "Kata Sandi",
        },
        buttons: {
          submit: "Masuk",
          register: "Belum punya akun? Daftar!",
        },
      },
      companies: {
        title: "Daftar Perusahaan",
        campaigns: "Kampanye",
        recurrence: {
          title: "Frekuensi",
          monthly: "Bulanan",
          bimonthly: "Dua Bulan Sekali",
          quarterly: "Triwulan",
          semiannual: "Semester",
          annual: "Tahunan",
        },
        form: {
          name: "Nama Perusahaan",
          plan: "Paket",
          token: "Token",
          submit: "Daftar",
          success: "Perusahaan berhasil dibuat!",
        },
        options: {
          enabled: "Aktif",
          disabled: "Tidak Aktif",
        },
        modal:{
          titleDeleted: "Penghapusan data",
          titleaccessAs: "Akses sebagai",
          deletedNote: "Apakah Anda yakin ingin menghapus data ini?",
          accessAsNote: "Apakah Anda ingin mengakses sistem sebagai perusahaan ini?",
        },
      },
      auth: {
        toasts: {
          success: "Login berhasil!",
        },
        token: "Token",
      },
      dashboard: {
        usersOnline: "Pengguna online",
        ticketsWaiting: "Tiket menunggu",
        ticketsOpen: "Tiket terbuka",
        ticketsDone: "Tiket terselesaikan",
        totalTickets: "Total tiket",
        newContacts: "Kontak baru",
        avgServiceTime: "Rata-rata waktu layanan",
        avgWaitTime: "Rata-rata waktu tunggu",
        ticketsOnPeriod: "Tiket dalam periode",
        userCurrentStatus: "Status saat ini",
        filter: {
          period: "Periode",
          custom: "Kustom",
          last3days: "3 hari terakhir",
          last7days: "7 hari terakhir",
          last14days: "14 hari terakhir",
          last30days: "30 hari terakhir",
          last90days: "90 hari terakhir"
        },
        date: {
          start: "Tanggal mulai",
          end: "Tanggal selesai",
        },
        ticketCountersLabels: {
          created: "Dibuat",
          closed: "Ditutup",
        },
        ticketzPro: {
          title: "Ticketz PRO",
          features1: "Whatsapp Official - Instagram - Messenger dan lainnya",
          features2: "Fitur eksklusif - Dukungan Premium - Migrasi Mudah",
          price: "Berlangganan Rp 199/bulan",
          note: "langsung dalam sistem",
          upgrade: "Klik untuk petunjuk Upgrade",
          visit: "Klik untuk mengunjungi situs!",
          upgradeInstructions: {
            title: "Panduan Upgrade",
            paragraph1: "Jika Anda menginstal image yang disediakan proyek ini di server atau VPS menggunakan panduan instalasi mudah, yang perlu Anda lakukan adalah mengakses server dan menjalankan perintah berikut:",
            command: "curl -sSL update.ticke.tz | sudo bash -s pro",
            paragraph2: "Dalam beberapa saat, Ticketz PRO akan terinstal dengan semua data Anda. Sekarang tinggal buka menu pengguna, klik 'Langganan Ticketz PRO' dan lakukan langganan.",
            paragraph3: "Jika instalasi Anda berbeda atau membutuhkan bantuan untuk menginstal Ticketz Pro, ",
            paragraph4: "hubungi kami dan kami akan membantu!",
          },
        },
      },
      connections: {
        title: "Koneksi",
        toasts: {
          deleted: "Koneksi WhatsApp berhasil dihapus!",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Apakah Anda yakin? Tindakan ini tidak bisa dibatalkan.",
          disconnectTitle: "Putuskan Koneksi",
          disconnectMessage: "Apakah Anda yakin? Anda perlu memindai Kode QR lagi.",
        },
        buttons: {
          add: "Tambah WhatsApp",
          disconnect: "Putuskan",
          tryAgain: "Coba Lagi",
          qrcode: "KODE QR",
          newQr: "Kode QR Baru",
          connecting: "Menghubungkan",
        },
        toolTips: {
          disconnected: {
            title: "Gagal memulai sesi WhatsApp",
            content: "Pastikan ponsel Anda terhubung ke internet dan coba lagi, atau minta Kode QR baru.",
          },
          qrcode: {
            title: "Menunggu pemindaian Kode QR",
            content: "Klik tombol 'KODE QR' dan pindai Kode QR dengan ponsel Anda untuk memulai sesi.",
          },
          connected: {
            title: "Koneksi berhasil!",
          },
          timeout: {
            title: "Koneksi ke ponsel telah terputus",
            content: "Pastikan ponsel Anda terhubung ke internet dan WhatsApp terbuka, atau klik 'Putuskan' untuk mendapatkan Kode QR baru.",
          },
          refresh: "Muat ulang",
          disconnect: "Putuskan",
          scan: "Pindai",
          newQr: "Kode QR Baru",
          retry: "Coba Lagi",
        },
        table: {
          name: "Nama",
          status: "Status",
          lastUpdate: "Pembaruan Terakhir",
          default: "Default",
          actions: "Aksi",
          session: "Sesi",
        },
      },
      internalChat: {
        title: "Obrolan Internal",
        alertChatTitle: "Harap isi judul percakapan.",
        alertChatUser: "Harap pilih setidaknya satu pengguna.",
        labelTitle: "Judul",
        labelPlaceholder: "Masukkan judul",
      },
      whatsappModal: {
        title: {
          add: "Tambah WhatsApp",
          edit: "Edit WhatsApp",
        },
        form: {
          name: "Nama",
          default: "Default",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "WhatsApp berhasil disimpan.",
      },
      qrCode: {
        message: "Pindai Kode QR untuk memulai sesi",
      },
      contacts: {
        title: "Kontak",
        toasts: {
          deleted: "Kontak berhasil dihapus!",
        },
        searchPlaceholder: "Cari...",
        confirmationModal: {
          deleteTitle: "Hapus",
          importTitlte: "Impor Kontak",
          deleteMessage: "Apakah Anda yakin ingin menghapus kontak ini? Semua interaksi terkait akan hilang.",
          importMessage: "Apakah Anda ingin mengimpor semua kontak dari ponsel?",
        },
        buttons: {
          import: "Impor Kontak",
          add: "Tambah Kontak",
        },
        table: {
          name: "Nama",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Aksi",
        },
      },
      contactModal: {
        title: {
          add: "Tambah Kontak",
          edit: "Edit Kontak",
        },
        form: {
          mainInfo: "Informasi Kontak",
          extraInfo: "Informasi Tambahan",
          name: "Nama",
          number: "Nomor WhatsApp",
          email: "Email",
          extraName: "Nama Bidang",
          extraValue: "Nilai",
          disableBot: "Nonaktifkan chatbot",
        },
        buttons: {
          addExtraInfo: "Tambah Informasi",
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Kontak berhasil disimpan.",
      },
      queueModal: {
        title: {
          titleNotDefined: "Judul tidak ditentukan",
          titleTabsQueue: "Data Antrian",
          titleTabsHours: "Jam Layanan",
          optionText: "Ketik opsi teks",
          optionTitle: "Judul opsi",
        },
        toasts: {

        },
        confirmationModal: {
          notificationAdd: "Data antrian berhasil disimpan",
          notificationEdit: "Data antrian berhasil diubah",
          notificationDeleted: "Data antrian berhasil dihapus",
          notificationHours: "Klik simpan untuk menyimpan perubahan",

        },
        form: {
          name: "Nama",
          color: "Warna",
          greetingMessage: "Pesan Sambutan",
          complationMessage: "Pesan Penyelesaian",
          outOfHoursMessage: "Pesan Di Luar Jam Kerja",
          ratingMessage: "Pesan Penilaian",
          transferMessage: "Pesan Transfer",
          token: "Token",
          forwardToQueue: "Teruskan ke Antrian",
          options: "Opsi",
        },
        outOfHoursAction: {
          title: "Tindakan Di Luar Jam Kerja",
          options: {
            pending: "Biarkan di antrian",
            closed: "Tutup tiket",
          },
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
          attach: "Lampirkan File",
          add: "Tambah Antrian",
          edit: "Edit Antrian",
          addSub: "Buat Sub Antrian",
        },
        serviceHours: {
          dayWeek: "Hari dalam Minggu",
          startTimeA: "Waktu Mulai - Shift A",
          endTimeA: "Waktu Berakhir - Shift A",
          startTimeB: "Waktu Mulai - Shift B",
          endTimeB: "Waktu Berakhir - Shift B",
          monday: "Senin",
          tuesday: "Selasa",
          wednesday: "Rabu",
          thursday: "Kamis",
          friday: "Jumat",
          saturday: "Sabtu",
          sunday: "Minggu",
          dontEnableHours: "Jangan aktifkan Jam Layanan pada antrian ini",
        },
      },
      userModal: {
        title: {
          add: "Tambah Pengguna",
          edit: "Edit Pengguna",
        },
        form: {
          name: "Nama",
          email: "Email",
          password: "Kata Sandi",
          profile: "Profil",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Pengguna berhasil disimpan.",
      },
      scheduleModal: {
        title: {
          add: "Jadwal Baru",
          edit: "Edit Jadwal",
        },
        form: {
          body: "Pesan",
          contact: "Kontak",
          sendAt: "Tanggal Dijadwalkan",
          sentAt: "Tanggal Terkirim",
          saveMessage: "Simpan Pesan di Tiket",
        },
        errorMessages: {
          tooShort: "Pesan terlalu pendek",
          required: "Wajib diisi",
          sendError: "Gagal terkirim",
          default: "Pesan",
          unidentifedWhatsapp: "WhatsApp tidak teridentifikasi",
          scheduleCheckError: "Gagal memeriksa jadwal: ",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        schedules: {
          scheduledDispatch: "Jadwal pengiriman untuk: ",
          messageSent: "Pesan terjadwal terkirim ke: ",
        },
        completionMessages: {
          default: "Layanan selesai",
        },
        success: "Jadwal berhasil disimpan.",
      },
      tagModal: {
        title: {
          add: "Tag Baru",
          edit: "Edit Tag",
          addKanban: "Lorong Baru",
          editKanban: "Edit Lorong",
        },
        form: {
          name: "Nama",
          color: "Warna",
          kanban: "Kanban",
        },
        buttons: {
          okAdd: "Tambah",
          okEdit: "Simpan",
          cancel: "Batal",
        },
        success: "Tag berhasil disimpan.",
        successKanban: "Lorong berhasil disimpan.",
      },
      chat: {
        noTicketMessage: "Pilih tiket untuk memulai percakapan.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "SERET DAN LETAKKAN FILE DI KOLOM DI BAWAH",
          titleFileList: "Daftar file(s)"
        },
      },
      ticketsManager: {
        buttons: {
          newTicket: "Baru",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Antrian",
      },
      tickets: {
        toasts: {
          deleted: "Tiket yang Anda kerjakan telah dihapus.",
        },
        notification: {
          message: "Pesan dari",
        },
        tabs: {
          open: {
            title: "Buka"
          },
          closed: {
            title: "Tutup",
            close: "Selesai"
          },
          groups: {
            title: "Grup"
          },
          search: {
            title: "Cari"
          },
        },
        search: {
          placeholder: "Cari tiket dan pesan",
          filterTags: "Filter berdasarkan Tags",
          filterUsers: "Filter berdasarkan User",
        },
        buttons: {
          showAll: "Semua",
        },
      },
      task:{
        title: "Tugas",
        newTask: "Tugas Baru",
      },
      transferTicketModal: {
        title: "Transfer Tiket",
        fieldLabel: "Ketik untuk mencari pengguna",
        fieldQueueLabel: "Transfer ke antrian",
        fieldQueuePlaceholder: "Pilih antrian",
        noOptions: "Tidak ada pengguna yang ditemukan dengan nama itu",
        buttons: {
          ok: "Transfer",
          cancel: "Batal",
        },
      },
      ticketsList: {
        pendingHeader: "ANTRIAN",
        assignedHeader: "Ditugaskan",
        noTicketsTitle: "Tidak ada apa-apa di sini!",
        noTicketsMessage: "Tidak ada tiket yang ditemukan dengan status ini atau istilah pencarian",
        buttons: {
          accept: "Terima",
        },
      },
      newTicketModal: {
        title: "Buat Tiket",
        fieldLabel: "Cari kontak",
        add: "Tambah",
        buttons: {
          ok: "Simpan",
          cancel: "Batal",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dasbor",
          connections: "Koneksi",
          tickets: "Tiket",
          quickMessages: "Respon Cepat",
          contacts: "Kontak",
          queues: "Antrian",
          tags: "Tags",
          administration: "Administrasi",
          service: "Service",
          users: "Pengguna",
          settings: "Pengaturan",
          helps: "Bantuan",
          messagesAPI: "API",
          schedules: "Penjadwalan",
          campaigns: "Kampanye",
          listing: "Daftar Kampanye",
          contactList: "Daftar Kontak",          
          annoucements: "Pengumuman",
          chats: "Chat Internal",
          financeiro: "Finansial",
          logout: "Keluar",
          management: "Manajemen",
          kanban: "Kanban"
        },
        appBar: {
          i18n: {
            language: "Indonesian",
            language_short: "ID"
          },
          user: {
            profile: "Profile",
            darkmode: "Dark mode",
            lightmode: "Light mode",
            language: "Select language",
            about: "About",
            logout: "Keluar",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Nomor",
          body: "Pesan",
          token: "Token Terdaftar",
        },
        mediaMessage: {
          number: "Nomor",
          body: "Nama File",
          media: "File",
          token: "Token Terdaftar",
        },
      },
      notifications: {
        noTickets: "Tidak ada notifikasi.",
      },
      quickMessages: {
        title: "Respon Cepat",
        buttons: {
          add: "Respon Baru",
        },
        dialog: {
          shortcode: "Pintasan",
          message: "Pesan",
          action: "Aksi",
          deleteRecord: "Hapus Pesan Cepat",
          questionAnswer: "Apakah Anda yakin ingin menghapus pesan ini?",
          notificationAdd: "Pesan berhasil ditambahhkan.",
          notificationDelete: "Pesan berhasil dihapus.",
          notificationUpdate: "Pesan sudah diupdate.",
        },
      },
      kanban: {
        title: "Kanban",
        searchPlaceholder: "Cari",
        subMenus: {
          list: "Panel",
          tags: "Jalur"
        }
      },
      tagsKanban: {
        title: "Jalur",
        laneDefault: "Buka",
        confirmationModal: {
          deleteTitle: "Apakah Anda yakin ingin menghapus Jalur ini?",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
        },
        table: {
          name: "Nama",
          color: "Warna",
          tickets: "Tiket",
          actions: "Aksi",
        },
        buttons: {
          add: "Jalur Baru",
        },
        toasts: {
          deleted: "Jalur berhasil dihapus.",
        },
      },
      contactLists: {
        title: "Daftar Kontak",
        table: {
          name: "Nama",
          contacts: "Kontak",
          actions: "Tindakan",
        },
        buttons: {
          add: "Daftar Baru",
        },
        dialog: {
          name: "Nama",
          company: "Perusahaan",
          okEdit: "Edit",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Edit",
          cancel: "Batal",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
        },
        toasts: {
          deleted: "Rekam dihapus",
          created: "Rekam dibuat",
        },
      },
      contactListItems: {
        title: "Kontak",
        searchPlaceholder: "Cari",
        buttons: {
          add: "Baru",
          lists: "Daftar",
          import: "Impor",
        },
        dialog: {
          name: "Nama",
          number: "Nomor",
          whatsapp: "WhatsApp",
          email: "Email",
          okEdit: "Edit",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Edit",
          cancel: "Batal",
        },
        table: {
          name: "Nama",
          number: "Nomor",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Aksi",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
          importMessage: "Apakah Anda ingin mengimpor kontak dari spreadsheet ini?",
          importTitlte: "Impor",
        },
        toasts: {
          deleted: "Data berhasil dihapus",
        },
      },
      campaigns: {
        title: "Kampanye",
        searchPlaceholder: "Cari",
        buttons: {
          add: "Kampanye Baru",
          contactLists: "Daftar Kontak",
          addVariable: "Tambahkan Variabel",
          saveSetting:  "Simpan Pengaturan",
        },
        table: {
          name: "Nama",
          whatsapp: "Koneksi",
          contactList: "Daftar Kontak",
          status: "Status",
          scheduledAt: "Dijadwalkan",
          completedAt: "Selesai",
          confirmation: "Konfirmasi",
          actions: "Aksi",
        },
        dialog: {
          new: "Kampanye Baru",
          update: "Edit Kampanye",
          readonly: "Hanya-baca",
          form: {
            name: "Nama",
            message1: "Pesan 1",
            message2: "Pesan 2",
            message3: "Pesan 3",
            message4: "Pesan 4",
            message5: "Pesan 5",
            confirmationMessage1: "Pesan Konfirmasi 1",
            confirmationMessage2: "Pesan Konfirmasi 2",
            confirmationMessage3: "Pesan Konfirmasi 3",
            confirmationMessage4: "Pesan Konfirmasi 4",
            confirmationMessage5: "Pesan Konfirmasi 5",
            messagePlaceholder: "Isi Pesan",
            whatsapp: "Koneksi",
            status: "Status",
            scheduledAt: "Dijadwalkan",
            confirmation: "Konfirmasi",
            contactList: "Daftar Kontak",
          },
          buttons: {
            add: "Tambah",
            edit: "Perbarui",
            okadd: "Oke",
            cancel: "Batalkan Pengiriman",
            restart: "Mulai Ulang Pengiriman",
            close: "Tutup",
            attach: "Lampirkan File",
          },
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
        },
        toasts: {
          title: "Interval",
          success: "Operasi berhasil diselesaikan",
          cancel: "Kampanye dibatalkan",
          restart: "Kampanye dimulai ulang",
          deleted: "Data berhasil dihapus",
          seconds: "Detik",
          messages: "Pesan",
          noInterval: "Tanpa jeda",
          greaterInterval: "Lama Pengiriman Ditunda",
          longerIntervalAfter: "Tunda Pengiriman",
          notDefined: "Tanpa tunda",
          messageInterval: "Jeda Pengiriman",
          hotKey: "Pintasan",
          
        },
      },
      announcements: {
        title: "Pengumuman",
        searchPlaceholder: "Cari",
        buttons: {
          add: "Pengumuman Baru",
          contactLists: "Daftar Pengumuman",
        },
        table: {
          priority: "Prioritas",
          title: "Judul",
          text: "Teks",
          mediaName: "File",
          status: "Status",
          actions: "Aksi",
        },
        dialog: {
          edit: "Edit Pengumuman",
          add: "Pengumuman Baru",
          update: "Edit Pengumuman",
          readonly: "Hanya-baca",
          form: {
            priority: {
              title: "Prioritas",
              high: "Tinggi",
              medium: "Sedang",
              low: "Rendah",
            },
            title: "Judul",
            text: "Teks",
            mediaPath: "File",
            attach: "Tanpa lampiran",
            status: {
              title: "Status",
              active: "Aktif",
              inactive: "Nonaktif",
            },
          },
          buttons: {
            add: "Tambah",
            edit: "Perbarui",
            okadd: "Oke",
            cancel: "Batal",
            close: "Tutup",
            attach: "Lampirkan File",
          },
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Aksi ini tidak dapat dibatalkan.",
        },
        toasts: {
          success: "Operasi berhasil diselesaikan",
          deleted: "Data berhasil dihapus",
        },
      },
      campaignsConfig: {
        title: "Konfigurasi Kampanye",
      },
      queues: {
        title: "Antrian & Chatbot",
        table: {
          name: "Nama",
          color: "Warna",
          greeting: "Pesan Sambutan",
          actions: "Aksi",
        },
        buttons: {
          add: "Tambah Antrian",
        },
        dialog: {
          name: "Nama",
          company: "Perusahaan",
          okEdit: "Edit",
          okAdd: "Tambah",
          add: "Tambah",
          edit: "Edit",
          cancel: "Batal",
        },
        toasts: {
          deleted: "Data berhasil dihapus",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Apakah Anda yakin? Tindakan ini tidak dapat dibatalkan! Tiket dari antrian ini akan tetap ada tetapi tidak akan lagi ditugaskan ke antrian mana pun.",
        },
      },
      queueSelect: {
        inputLabel: "Antrian",
      },
      users: {
        title: "Pengguna",
        table: {
          name: "Nama",
          email: "Email",
          profile: "Profil",
          actions: "Aksi",
        },
        buttons: {
          add: "Tambah Pengguna",
        },
        toasts: {
          deleted: "Pengguna berhasil dihapus.",
        },
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Semua data pengguna akan hilang. Tiket terbuka dari pengguna ini akan dipindahkan ke antrian.",
        },
      },
      helps: {
        title: "Pusat Bantuan",
      },
      about: {
        aboutthe: "Tentang",
        copyright: "� 2024 - Didukung oleh ticketz",
        buttonclose: "Tutup",
        title: "Tentang ticketz",
        abouttitle: "Asal dan peningkatan",
        aboutdetail: "ticketz berasal secara tidak langsung dari proyek Whaticket dengan peningkatan yang dibagikan oleh para pengembang sistem EquipeChat melalui saluran VemFazer di YouTube, kemudian ditingkatkan oleh Claudemir Todo Bom",
        aboutauthorsite: "Situs penulis",
        aboutwhaticketsite: "Situs Komunitas Whaticket di Github",
        aboutvemfazersite: "Situs saluran Vem Fazer di Github",
        licenseheading: "Lisensi Sumber Terbuka",
        licensedetail: "ticketz dilisensikan di bawah GNU Affero General Public License versi 3, yang berarti bahwa setiap pengguna yang memiliki akses ke aplikasi ini berhak untuk mendapatkan akses ke kode sumbernya. Informasi lebih lanjut di tautan berikut:",
        licensefulltext: "Teks lengkap lisensi",
        licensesourcecode: "Kode sumber Ticketz"
      },
      schedules: {
        title: "Jadwal",
        confirmationModal: {
          deleteTitle: "Hapus",
          deleteMessage: "Apakah Anda yakin ingin menghapus kampanye ini? Tindakan ini tidak dapat dibatalkan.",
        },
        table: {
          contact: "Kontak",
          body: "Pesan",
          sendAt: "Tanggal Penjadwalan",
          sentAt: "Tanggal Pengiriman",
          status: "Status",
          actions: "Aksi",
        },
        buttons: {
          add: "Jadwal Baru",
        },
        toasts: {
          deleted: "Jadwal berhasil dihapus.",
        },
      },
      tags: {
        title: "Tag",
        confirmationModal: {
          deleteTitle: "Apakah Anda yakin ingin menghapus Tag ini?",
          deleteMessage: "Tindakan ini tidak dapat dibatalkan.",
        },
        table: {
          name: "Nama",
          color: "Warna",
          tickets: "Catatan",
          actions: "Aksi",
          id: "Id",
          kanban: "Kanban",
        },
        buttons: {
          add: "Tag Baru",
        },
        toasts: {
          deleted: "Tag berhasil dihapus.",
        },
      },
      whitelabel: {
        primaryColorLight: "Warna Utama Terang",
        primaryColorDark: "Warna Utama Gelap",
        lightLogo: "Logo aplikasi terang",
        darkLogo: "Logo aplikasi gelap",
        favicon: "Favicon logo aplikasi",
        appname: "Nama aplikasi",
        logoHint: "Lebih disukai format SVG dengan rasio aspek 28:10",
        faviconHint: "Lebih disukai gambar SVG berbentuk persegi atau PNG berukuran 512x512",
      },
      settings: {
        group: {
          general: {
            title: "Pengaturan Umum",
            VoiceAndVideoCalls: {
              title: "Panggilan suara dan video",
              options: {
                enabled: "Abaikan",
                disabled: "laporan ketidaktersediaan",
              },
            },
            AutomaticChatbotOutput: {
              title: "Output chatbot otomatis",
              options: {
                enabled: "Diaktifkan",
                disabled: "Dinonaktifkan",
              },
            },
            autoReopenTimeout: "Timeout buka otomatis (menit)",
          },
          rating: {
            title: "Pengaturan Penilaian",
            label: "Penilaian",
            timeout: "Waktu tunggu penilaian (menit)",
          },
          noQueue: {
            title: "Pengaturan Tiket Tanpa Antrian",
            label: "Batas waktu untuk tiket tanpa antrian (menit)",
            action: "Aksi untuk batas waktu tiket tanpa antrian",
            options: {
                close: "Tutup tiket",
                transferTo: "Transfer ke",
              },
          },
          ticketInProgress: {
            title: "Pengaturan Tiket Dalam Penanganan",
            label: "Batas waktu untuk tiket dalam penanganan (menit)",
            action: "Aksi untuk batas waktu tiket terbuka",
            options: {
                returnToQueue: "Kembali ke antrian",
                closeService: "Tutup layanan",
              },
          },
          timeouts: {
            title: "Waktu Tunggu",
            actionforUnassignedTicketTimeout: "Aksi untuk batas waktu tiket tanpa antrian",
            actionforOpenTicketTimeout: "Aksi untuk batas waktu tiket terbuka",
            transferTo: "Transfer ke",
            timeoutforTicketInProgress: "Batas waktu untuk tiket dalam penanganan (menit)",
            timeoutforUnassignedTicket: "Batas waktu untuk tiket tanpa antrian (menit)",
            returnToQueue: "Kembali ke antrian",
            closeService: "Tutup penanganan",
          },
          officeHours: "Jam kantor",
          groups: "Grup",
          confidenciality: "Kerahasiaan",
          api: "API",
          externalServices: "Layanan Eksternal",
          serveradmin: "Administrasi Server",
          helps:{
            title: "Judul",
            videoLink: "Link Video",
            description: "Deskripsi",
            notification:{
              loadListError: "Tidak dapat memuat daftar catatan",
              operationSuccess: "Data berhasil disimpan!",
              operationDeletedSuccess: "Data berhasil dihapus!",
              operationError: "Tidak dapat melakukan operasi. Periksa apakah sudah ada nama yang sama atau apakah kolom telah diisi dengan benar",
              genericError: "Tidak dapat melakukan operasi",
            },
            deleteRecord: {
              title: "Penghapusan Data",
              confirmationMessage: "Apakah Anda yakin ingin menghapus data ini?"
            },
          },
        },
        success: "Pengaturan berhasil disimpan.",
        copiedToClipboard: "Disalin ke clipboard",
        title: "Pengaturan",
        chatbotTicketTimeout: "Batas waktu chatbot (menit)",
        chatbotTicketTimeoutAction: "Aksi batas waktu chatbot",
        settings: {
          userCreation: {
            name: "Pembuatan pengguna",
            options: {
              enabled: "Diaktifkan",
              disabled: "Dinonaktifkan",
            },
          },
        },
        validations: {
          title: "validasi",
          options: {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          },
        },
        OfficeManagement: {
          title: "Manajemen kantor",
          options: {
            disabled: "Dinonaktifkan",
            ManagementByDepartment: "Manajemen berdasarkan departemen",
            ManagementByCompany: "Manajemen oleh perusahaan",
          },
        },
        outOfHoursAction: {
          title: "Aksi Di Luar Jam Kerja",
          options: {
            pending: "Biarkan di antrian",
            closed: "Tutup tiket",
          },
        },
        IgnoreGroupMessages: {
          title: "Abaikan pesan grup",
          options: {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          },
        },
        soundGroupNotifications: {
          title: "Notifikasi grup suara",
          options: {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          },
        },
        groupsTab: {
          title: "Tab Grup",
          options: {
            enabled: "Aktif",
            disabled: "Nonaktif",
          },
        },
        voiceAndVideoCalls: {
          title: "Panggilan Suara dan Video",
          options: {
            enabled: "Abaikan",
            disabled: "Lapor ketidaktersediaan",
          },
        },
        automaticChatbotOutput: {
          title: "Output Chatbot Otomatis",
          options: {
            enabled: "Aktif",
            disabled: "Nonaktif",
          },
        },
        ShowNumericEmoticons: {
          title: "Menampilkan emoji numerik dalam antrean",
          options: {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          },
        },
        QuickMessages: {
          title: "Pesan cepat",
          options: {
            enabled: "Berdasarkan perusahaan",
            disabled: "Oleh Pengguna",
          },
        },
        AllowRegistration: {
          title: "Izinkan pendaftaran",
          options: {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          },
        },
        FileUploadLimit: {
          title: "Batas Unggah File (MB)",
        },
        FileDownloadLimit: {
          title: "Batas unduhan file (MB)",
        },
        GracePeriod: {
          title: "Masa tenggang",
        },
        "messageVisibility": {
          "title": "Visibilitas Pesan",
          "options": {
            "respectMessageQueue": "Hormati Antrian Pesan",
            "respectTicketQueue": "Hormati Antrian Tiket"
          }
        },
        "keepQueueAndUser": {
          "title": "Simpan antrian dan pengguna pada tiket tertutup",
          "options": {
            enabled: "Diaktifkan",
            disabled: "Dinonaktifkan",
          }
        },
        WelcomeGreeting: {
          greetings: "halo",
          earlyMorning: "Selamat dini hari,",
          morning: "Selamat pagi,",
          afternoon: "Selamat siang,",
          evening: "Selamat malam,",
          welcome: "selamat datang di",
          expirationTime: "Aktif sampai",
        },
        Options: {
          title: "Pilihan",
        },
        Companies: {
          title: "Perusahaan",
        },
        schedules: {
          title: "Jadwal",
        },
        Plans: {
          title: "Rencana",
        },
        Help: {
          title: "Bantuan",
        },
        Whitelabel: {
          title: "Whitelabel",
        },
        PaymentGateways: {
          title: "Platform Pembayaran",
        },
        AIProvider: {
          title: "Layanan AI",
        },
        AudioTranscriptions: {
          title: "Transkripsi Audio",  
        },
        TagsMode: {
          title: "Mode Tag",
          options: {
            ticket: "Tiket",
            contact: "Kontak",
            both: "Tiket dan Kontak"
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Ditugaskan kepada:",
          buttons: {
            return: "Kembali",
            resolve: "Selesaikan",
            reopen: "Buka Kembali",
            accept: "Terima",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Ketik pesan",
        placeholderClosed: "Buka kembali atau terima tiket ini untuk mengirim pesan.",
        signMessage: "Tandatangani",
        replying: "Membalas",
        editing: "Mengedit",
      },
      message: {
        edited: "Diedit",
        forwarded: "Diteruskan",
      },

      contactDrawer: {
        header: "Informasi Kontak",
        buttons: {
          edit: "Edit Kontak",
        },
        extraInfo: "Informasi lainnya",
      },
      ticketOptionsMenu: {
        schedule: "Jadwal",
        delete: "Hapus",
        transfer: "Transfer",
        registerAppointment: "Catatan Kontak",
        appointmentsModal: {
          title: "Catatan Kontak",
          textarea: "Catatan",
          placeholder: "Masukkan informasi yang ingin Anda catat di sini",
        },
        confirmationModal: {
          title: "Hapus tiket kontak",
          message: "Perhatian! Semua pesan yang terkait dengan tiket akan hilang.",
        },
        buttons: {
          delete: "Hapus",
          cancel: "Batal",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Oke",
          cancel: "Batal",
        },
      },
      messageOptionsMenu: {
        delete: "Hapus",
        edit: "Edit",
        forward: "Teruskan",
        history: "Riwayat",
        reply: "Balas",
        confirmationModal: {
          title: "Hapus pesan?",
          message: "Tindakan ini tidak dapat dibatalkan.",
        },
      },
      messageHistoryModal: {
        close: "Tutup",
        title: "Riwayat edit pesan"
      },
      presence: {
        unavailable: "Tidak tersedia",
        available: "Tersedia",
        composing: "Menulis...",
        recording: "Merekam...",
        paused: "Jeda",
      },
      privacyModal: {
        title: "Edit Privasi Whatsapp",
        buttons: {
          cancel: "Membatalkan",
          okEdit: "Menyimpan",
        },
        form: {
          menu: {
            all: "Semua",
            none: "Bukan siapa-siapa",
            contacts: "Kontak saya",
            contact_blacklist: "Kontak yang dipilih",
            match_last_seen: "Pertandingan Terakhir Dilihat",
            known: "Diketahui",
            disable: "Dengan disabilitas",
            hrs24: "24 Jam",
            dias7: "7 Hari",
            dias90: "90 Hari",
          },
          readreceipts: "Untuk memperbarui privasi Tanda Terima Baca",
          profile: "Untuk memperbarui privasi Gambar Profil",
          status: "Untuk memperbarui privasi Pesan",
          online: "Untuk memperbarui Privasi Online",
          last: "Untuk memperbarui privasi Terakhir terlihat",
          groupadd: "Untuk memperbarui Grup Tambahkan privasi",
          calladd: "Untuk memperbarui Panggilan Tambahkan privasi",
          disappearing: "Untuk memperbarui Mode Hilang Default",
        },
      },
      backendErrors: {
        ERR_UNAUTHORIZED: "Anda tidak memiliki izin untuk mengakses sumber daya ini.",
        ERR_FORBIDDEN: "Akses ditolak. Periksa izin Anda.",
        ERR_CHECK_NUMBER: "Nomor ini tidak terdaftar di WhatsApp.",
        ERR_NO_OTHER_WHATSAPP: "Harus ada setidaknya satu WhatsApp default.",
        ERR_NO_DEF_WAPP_FOUND: "Tidak ada WhatsApp default yang ditemukan. Periksa halaman koneksi.",
        ERR_WAPP_NOT_INITIALIZED: "Sesi WhatsApp ini belum diinisialisasi. Periksa halaman koneksi.",
        ERR_WAPP_CHECK_CONTACT: "Tidak dapat memeriksa kontak WhatsApp. Periksa halaman koneksi.",
        ERR_WAPP_INVALID_CONTACT: "Ini bukan nomor WhatsApp yang valid.",
        ERR_WAPP_DOWNLOAD_MEDIA: "Tidak dapat mengunduh media dari WhatsApp. Periksa halaman koneksi.",
        ERR_INVALID_CREDENTIALS: "Kesalahan autentikasi. Silakan coba lagi.",
        ERR_SENDING_WAPP_MSG: "Kesalahan mengirim pesan WhatsApp. Periksa halaman koneksi.",
        ERR_DELETE_WAPP_MSG: "Tidak dapat menghapus pesan WhatsApp.",
        ERR_EDITING_WAPP_MSG: "Tidak dapat mengedit pesan WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Sudah ada tiket terbuka untuk kontak ini.",
        ERR_SESSION_EXPIRED: "Sesi berakhir. Silakan masuk.",
        ERR_USER_CREATION_DISABLED: "Pembuatan pengguna telah dinonaktifkan oleh administrator.",
        ERR_NO_PERMISSION: "Anda tidak memiliki izin untuk mengakses sumber daya ini.",
        ERR_DUPLICATED_CONTACT: "Kontak dengan nomor ini sudah ada.",
        ERR_NO_SETTING_FOUND: "Tidak ada pengaturan ditemukan dengan ID ini.",
        ERR_NO_CONTACT_FOUND: "Tidak ada kontak ditemukan dengan ID ini.",
        ERR_NO_TICKET_FOUND: "Tidak ada tiket ditemukan dengan ID ini.",
        ERR_NO_USER_FOUND: "Tidak ada pengguna ditemukan dengan ID ini.",
        ERR_NO_WAPP_FOUND: "Tidak ada WhatsApp ditemukan dengan ID ini.",
        ERR_CREATING_MESSAGE: "Kesalahan membuat pesan dalam basis data.",
        ERR_CREATING_TICKET: "Kesalahan membuat tiket dalam basis data.",
        ERR_FETCH_WAPP_MSG: "Kesalahan mengambil pesan dari WhatsApp, mungkin terlalu lama.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS: "Warna ini sudah digunakan, pilih yang lain.",
        ERR_WAPP_GREETING_REQUIRED: "Pesan sambutan wajib jika ada lebih dari satu antrian.",
        ERR_SUBSCRIPTION_CHECK_FAILED: "Pemeriksaan langganan gagal.",
        ERR_WAPP_NOT_FOUND: "Koneksi tidak tersedia.",
        ERR_SUBSCRIPTION_EXPIRED: "Langganan Anda telah kedaluwarsa.",
        ERR_UNKOWN: "Kesalahan tidak diketahui.",
      },
      ticketz: {
        registration: {
          header: "Daftar di basis pengguna Ticketz",
          description: "Isi kolom di bawah ini untuk mendaftar di basis pengguna Ticketz dan menerima berita tentang proyek.",
          name: "Nama",
          country: "Negara",
          phoneNumber: "Nomor Telepon",
          submit: "Daftar",
        },
        support: {
          title: "Dukung proyek Ticketz",
          mercadopagotitle: "Kartu Kredit",
          recurringbrl: "Donasi berulang dalam BRL",
          paypaltitle: "Kartu Kredit",
          international: "Donasi dalam USD",
        }
      },
      owenAd: {
        title: "Owen Payments mendukung Ticketz",
        description1: "Startup Owen Payments menawarkan pembayaran via PIX dengan biaya tetap Rp 0,99 per transaksi.",
        description2: "Sebagian dari setiap transaksi akan disalurkan ke proyek Ticketz, jadi dengan menggunakan metode pembayaran ini Anda juga turut mendukung proyek ini.",
        description3: 'Pilih gateway pembayaran "Owen Payments 💎" dan buka akun Anda tanpa perlu keluar dari Ticketz!'
      },
    },
  },
};

export {
  messages
};