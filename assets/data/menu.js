const data = [
  {
    id: 15,
    name: "Beranda",
    code: "home",
    icon: "ic_dashboard",
    menus: [
      {
        id: 30,
        code: "beranda",
        label: "Beranda",
        enabled: true,
        url: "/beranda",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: true
      }
    ],
    url: "",
    groupname: "karyawan"
  },
  {
    id: 13,
    name: "Pengaturan Proyek",
    code: "proyekmgt",
    icon: "ic_setting_project",
    menus: [
      {
        id: 26,
        code: "klien",
        label: "Klien",
        enabled: true,
        url: "/proyekmgt-klien",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 24,
        code: "proyek",
        label: "Proyek",
        enabled: true,
        url: "/proyekmgt-proyek",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 25,
        code: "activity",
        label: "Aktivitas",
        enabled: true,
        url: "/proyekmgt-activity",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      }
    ],
    url: "",
    groupname: "admin"
  },
  {
    id: 11,
    name: "Aktivitas",
    code: "aktivitas",
    icon: "ic_activity",
    menus: [
      {
        id: 16,
        code: "aktivitas-anda",
        label: "Aktivitas Anda",
        enabled: false,
        url: "/aktivitas-anda",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 17,
        code: "pemantauan-aktivitas",
        label: "Pemantauan Aktivitas",
        enabled: false,
        url: "/pemantauan-aktivitas",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 18,
        code: "laporan",
        label: "Laporan",
        enabled: false,
        url: "/laporan",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      }
    ],
    url: "",
    groupname: "karyawan"
  },
  {
    id: 14,
    name: "Pengaturan Cuti",
    code: "leavemgt",
    icon: "ic_setting_leave",
    menus: [
      {
        id: 27,
        code: "penyetuju-cuti",
        label: "Persetujuan Cuti",
        enabled: true,
        url: "/cutimgt-penyetuju-cuti",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 28,
        code: "tipe-cuti",
        label: "Tipe Cuti",
        enabled: true,
        url: "/cutimgt-tipe-cuti",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false,
        menus: [
          {
            id: 128,
            code: "tipe-cuti-child1",
            label: "Tipe Cuti Child 1",
            enabled: true,
            url: "/cutimgt-tipe-cuti-child1",
            hasAccessRights: null,
            accessRights: {},
            mainMenu: false
          },
          {
            id: 129,
            code: "tipe-cuti-child2",
            label: "Tipe Cuti Child 2",
            enabled: true,
            url: "/cutimgt-tipe-cuti-child2",
            hasAccessRights: null,
            accessRights: {},
            mainMenu: false
          }
        ]
      },
      {
        id: 29,
        code: "jumlah-cuti",
        label: "Jumlah Cuti",
        enabled: true,
        url: "/cutimgt-jumlah-cuti",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      }
    ],
    url: "",
    groupname: "admin"
  },
  {
    id: 19,
    name: "Pengaturan Hari Libur",
    code: "holidaymgt",
    icon: "ic_date",
    menus: [
      {
        id: 31,
        code: "pengaturan-libur",
        label: "Pengaturan Hari Libur",
        enabled: true,
        url: "/holidaymgt-hari-libur",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: true
      }
    ],
    url: "",
    groupname: "admin"
  },
  {
    id: 10,
    name: "Pengaturan Karyawan",
    code: "employeemgt",
    icon: "ic_setting_employee",
    menus: [
      {
        id: 14,
        code: "organization",
        label: "Struktur Organisasi",
        enabled: true,
        url: "/organization-structure",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      },
      {
        id: 15,
        code: "employee",
        label: "Manajemen Karyawan",
        enabled: true,
        url: "/employee-management",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: false
      }
    ],
    url: "",
    groupname: "admin"
  },
  {
    id: 12,
    name: "Otorisasi Admin",
    code: "otorisasiadmin",
    icon: "ic_setting",
    menus: [
      {
        id: 19,
        code: "otorisasi-role",
        label: "Otorisasi Admin",
        enabled: true,
        url: "/otorisasi-admin",
        hasAccessRights: null,
        accessRights: {},
        mainMenu: true
      }
    ],
    url: "",
    groupname: "admin"
  }
];


export default data 