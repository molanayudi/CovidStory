
function openCovidGlobal() {
    let myWidth = 800;
    let myHeight = 600;
    let left = (window.screen.width - myWidth) / 2;
    let top = (window.screen.height - myHeight) / 4;
    window.open('./covidGlobal/index.html', "covidglobal", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
}

function openCovidTimeSlider() {
    let myWidth = 1000;
    let myHeight = 600;
    let left = (window.screen.width - myWidth) / 2;
    let top = (window.screen.height - myHeight) / 4;
    window.open('./timeSlider/timeslider.html', "timeslider", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
}

function openDensity() {
    let myWidth = 1000;
    let myHeight = 600;
    let left = (window.screen.width - myWidth) / 2;
    let top = (window.screen.height - myHeight) / 4;
    window.open('./density/index.html', "density", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
}

var config = {
    style: 'mapbox://styles/molanayudi/ck9zpif6o3km41isasq22mmiv',
    accessToken: 'pk.eyJ1IjoibW9sYW5heXVkaSIsImEiOiJjazlqOG02bXMxaHVsM2dvMTNiZzRqdWNsIn0.OMNCpFG_LHYm9m16_dYqnw',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: 'SARS-Cov2',
    subtitle: 'From global to local',
    byline: '',
    footer: 'Sumber Data: Kasus Covid-19 Global, <a href="https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"> CSSE at Johns Hopkins University</a>. Time slider kasus Covid-19 Indonesia, <a href="https://docs.google.com/spreadsheets/d/1ma1T9hWbec1pXlwZ89WakRk-OfVUQZsOCFl4FwZxzVw/htmlview#/">Kawal Covid-19</a>. Data Demografis Indonesia, <a href="http://gis.dukcapil.kemendagri.go.id:6080/arcgis/rest/services">Dukcapil Kemendagri</a> ',
    chapters: [
        {
            id: 'covid_global',
            title: 'coronavirus pada skala global',
            image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            description: 'Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19. Kini Covid-19 telah tersebar secara global pada setiap negara. <a href="javascript:void()" onclick="openCovidGlobal()">Pemetaan COVID Secara Global</a>',
            location: {
                center: [0, 0],
                zoom: 1,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'covid_global',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'covid_global',
                    opacity: 1
                }
            ]
        },
        {
            id: 'timeSlider',
            title: 'Perkembangan COVID-19 di Indonesia',
            image: '',
            description: 'Awal bulan maret merupakan kasus pertama di Indonesia. Dua Warga Negara Indonesia (WNI) yang berdomisili di Depok diketahui positif mengidap virus SARS Cov-2. Kedua pengidap Covid-19 itu memiliki riwayat berinteraksi dengan WN Jepang yang diketahui lebih dulu menderita penyakit tersebut. Selanjutnya beberapa klaster mulai terbentuk, dimulai dari Jakarta menyebar disekitar Pulau Jawa - Sulawesi - Kalimantan - hingga beberapa provinsi di Indonesia. Berikut timeseries kasus Covid-19 yang telah di konfirmasi <a href="javascript:void(0)" onclick="openCovidTimeSlider()">Buka</a>',
            location: {
                center: [120, 0],
                zoom: 4,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                    layer: 'timeSlider',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'timeSlider',
                    opacity: 0.5
                }
            ]
        },
        // {
        //     id: ' ',
        //     title: 'Harrison Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).',
        //     location: {
        //         center: [-113.72917, 48.58938],
        //         zoom: 12.92,
        //         pitch: 39.50,
        //         bearing: 36.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'kepadatan penduduk',
            title: 'Kondisi demografis indonesia: Kepadatan penduduk',
            image: '',
            description: 'Penyebaran virus covid-19 paling banyak terjadi di Pulau Jawa. Hal itu disebabkan jumlah penduduk di Pulau Jawa sangatlah padat. Kepadatan penduduk disajikan dengan perhitungan Jumlah penduduk/Luas wilayah. Hasil Peta Kepadatan Penduduk adalah sebagai berikut, <a href="javascript:void(0)" onclick="openDensity()">Lihat</a>',
            location: {
                center: [120, 0],
                zoom: 4,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 1
                }
            ]
        }
    
    ]
};
