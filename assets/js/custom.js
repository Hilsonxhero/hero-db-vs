
/**
 * open sidebar
 */

let bars = document.querySelectorAll('.bars');
let sideBarNav = document.querySelector('.sidebar__nav');
let content = document.querySelector('.content');
bars.forEach((e) => {
    e.addEventListener("click", function () {
        sideBarNav.classList.toggle("is-active");
        content.classList.toggle("is-active");
    })
})

/**
 * Tooltip
 */

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/**
 * Sub menu
 */
const subMenuItem = document.querySelectorAll("ul li.has-sub-ui");

subMenuItem.forEach((el) =>
    el.addEventListener("click", () => {
        var vh = el.children[1].scrollHeight;
        if (el.classList.contains("open")) {
            el.classList.remove("open");
            // el.children[1].classList.remove('open');
            el.children[1].style.height = 0;

        } else {
            subMenuItem.forEach((el2) => (el2.children[1].style.height = 0, el2.classList.remove("open")));
            el.classList.add("open");
            // el.children[1].classList.add('open');
            el.children[1].style.height = vh + "px";
        }
    })
);

/**
 * Charts
 */
c3.generate({
    bindto: '#Page_Views', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 110, 81, 105, 108, 119, 117]
        ],
        type: 'bar', // default type of chart
        groups: [
            ['data1',]
        ],
        colors: {
            'data1': '#E15858'
        },
        names: {
            // name of each serie
            'data1': 'Views',
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    bar: {
        width: 10
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: -20,
        top: 0,
        left: -6,
    },
});

c3.generate({
    bindto: '#Order_status', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 63],
            ['data2', 37]
        ],
        type: 'donut', // default type of chart
        colors: {
            'data1': '#FFA117',
            'data2': '#ffd861',
        },
        names: {
            // name of each serie
            'data1': 'This Month',
            'data2': 'Last Month'
        }
    },
    axis: {},
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-bar', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, -1, 17],
            ['data2', 22, -3, 25, 27, 17, 18],
            ['data3', 17, 18, 21, 28, 21, 27],
            ['data4', 11, 15, -4, 22, 12, 25],
        ],
        type: 'bar', // default type of chart
        colors: {
            'data1': '#e48903',
            'data2': '#fdaa30',
            'data3': '#f5b455',
            'data4': '#f1c990',
        },
        names: {
            // name of each serie
            'data1': 'Apple',
            'data2': 'Nokia',
            'data3': 'Mi',
            'data4': 'Vivo'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        y: {
            tick: {
                format: d3.format("$,")
            }
        }
    },
    bar: {
        width: 15
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-Event-sale-overview ', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 9, 14, 18, 21, 12, 21, 23, 18, 13, 9],
            ['data2', 15, 18, 11, 15, 17, 16, 14, 17, 16, 14]
        ],
        labels: true,
        type: 'line', // default type of chart
        colors: {
            'data1': '#e96a8d',
            'data2': '#f3aca2',
        },
        names: {
            // name of each serie
            'data1': 'مجموع فروش',
            'data2': 'درآمد خالص'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['اسفند 15', 'اسفند 16', 'اسفند 17', 'اسفند 18', 'اسفند 19', 'اسفند 20', 'اسفند 21', 'اسفند 22', 'اسفند 23', 'اسفند 24']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-sale-overview ', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 9, 14, 18, 21, 12, 21, 23, 18, 13, 9],
            ['data2', 15, 18, 11, 15, 17, 16, 14, 17, 16, 14]
        ],
        labels: true,
        type: 'line', // default type of chart
        colors: {
            'data1': '#e96a8d',
            'data2': '#f3aca2',
        },
        names: {
            // name of each serie
            'data1': 'فروخته شده',
            'data2': 'درآمد خالص'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['اسفند 15', 'اسفند 16', 'اسفند 17', 'اسفند 18', 'اسفند 19', 'اسفند 20', 'اسفند 21', 'اسفند 22', 'اسفند 23', 'اسفند 24']
        },
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-bar-stacked', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 110, 81, 158, 108, 149, 217],
            ['data2', 70, 192, 75, 97, 219, 152],
            ['data3', 52, 142, 111, 58, 62, 174],
        ],
        type: 'bar', // default type of chart
        groups: [
            ['data1', 'data2', 'data3']
        ],
        colors: {
            'data1': '#5CB65F',
            'data2': '#3C89DA',
            'data3': '#E15858',
        },
        names: {
            // name of each serie
            'data1': 'مثبت',
            'data2': 'متوسط',
            'data3': 'منفی',
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    bar: {
        width: 5
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0,
        left: 6,
    },
});

c3.generate({
    bindto: '#chart-bar', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 10000000, 7500000, 14000000, 11000000, 3000000, 8000000],
            ['data2', 6000000, 4000000, 4000000, 8000000, 2500000, 4000000],
            ['data3', 4000000, 3500000, 10000000, 3000000, 500000, 4000000],
        ],
        type: 'bar', // default type of chart
        colors: {
            'data1': '#007FFF', // blue
            'data2': '#2d96ff', // blue
            'data3': '#2dd8ff', // blue
        },
        names: {
            // name of each serie
            'data1': 'فروش کل',
            'data2': 'درآمد سایت',
            'data3': 'درآمد مدرس',
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    bar: {
        width: 16
    },
    legend: {
        show: true, //hide legend
    },
    padding: {
        bottom: 20,
        top: 0
    },
});

c3.generate({
    bindto: '#chart-area-spline-users', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'area-spline', // default type of chart
        groups: [
            ['data1', 'data2']
        ],
        colors: {
            'data1': '#bbbec2',
            'data2': '#57595d',
        },
        names: {
            // name of each serie
            'data1': 'کاربر عادی',
            'data2': 'کاربر ویژه'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: -20,
        top: 0,
        left: -7,
    },
});

c3.generate({
    bindto: '#chart-bar-stacked-tickets', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        groups: [
            ['data1', 'data2']
        ],
        colors: {
            'data1': '#77797c',
            'data2': '#bbbec2',
        },
        names: {
            // name of each serie
            'data1': 'پاسخ داده شده',
            'data2': 'در حال انتظار'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    bar: {
        width: 10
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: -20,
        top: 0,
        left: -6,
    },
});

c3.generate({
    bindto: '#chart-bar-total-users', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 15, 18, 19, 17],
            ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        groups: [
            ['data1', 'data2']
        ],
        colors: {
            'data1': '#77797c',
            'data2': '#bbbec2',
        },
        names: {
            // name of each serie
            'data1': 'کاربر عادی',
            'data2': 'کاربر ویژه'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']
        },
    },
    bar: {
        width: 10
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: -20,
        top: 0,
        left: -6,
    },
});


/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

/**
 * Tags
 */
(function () {
    on('click', 'ul.tags', function (e) {
        select('#search-field').focus();
    })
    on('keypress', '#search-field', function (event) {
        if (event.keyCode == '13') {
            event.preventDefault();
            if ((this.value != '')) {
                let el = document.createElement("li");
                el.className = "addedTag";
                el.innerHTML = `${this.value} <span class="tagRemove" onclick="this.parentNode.remove();"></span><input type="hidden" value="${this.value}" name="tags[]">`;

                select('.tags .tagAdd').insertAdjacentElement('beforebegin', el);

                this.value = '';

            } else {
                this.value = '';

            }
        }
    })
}())

/**
 * Show review upload image
 * */

function showreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById('file-ip-1-preview');
        preview.src = src;
        preview.style.display = "block";
    }
}

on("click", "#discounts-field-2", function () {
    select("#select-course-js").className = "d-block";
})

on("click", "#discounts-field-1", function () {
    select("#select-course-js").className = "d-none";
})

/**
 * select2
 */
$(document).ready(function () {
    $('.js-select-ui').select2({
        language: "fa"
    });
});


/**
 * change theme
 */

$(".setting_switch .lv-btn").on("change", function () {
    this.checked ? $("body").addClass("dark-theme") : $("body").removeClass("dark-theme")
})

/**
 * open setting navbar
 */

$("#js-setting-ui").on("click", function () {
    $(".theme-setting__nav").toggleClass("open")
})

/**
 * close setting navbar
 */


$(document).on("click", function (s) {
    $(s.target).closest("#js-setting-ui").length || $(s.target).closest(".theme-setting__nav").length || (
        $(".theme-setting__nav").removeClass("open"),
            $("body").removeClass("overflow-hidden"));
})


/**
 * confirmation delete button
 */

on('click', '.js-btn-delete', function () {
    Swal.fire({
        title: 'از انجام این عملیات اطمینان دارید ؟!',
        text: "این عملیات قابل برگشت نمی باشد",
        icon: 'warning',
        iconHtml: '<i class="ri-information-line"></i>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'لغو',
        confirmButtonText: 'تایید'
    })
}, true);

/**
 * return back page button
 */

on('click', '#js-btn-back-page', function () {
    history.back();
})

/**
 * pagination
 */

const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 1;


element ? element.innerHTML = createPagination(totalPages, page) : null;

function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
        liTag += `<li class="btn-pg-ui prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="ri-arrow-right-s-line"></i></span></li>`;
    }

    if (page > 2) {
        liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) {
            continue;
        }
        if (plength == 0) {
            plength = plength + 1;
        }
        if (page == plength) {
            active = "active";
        } else {
            active = "";
        }
        liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    // if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
    //     if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
    //         liTag += `<li class="dots"><span>...</span></li>`;
    //     }
    //     liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    // }

    if (page < totalPages) {
        liTag += `<li class="btn-pg-ui next" onclick="createPagination(totalPages, ${page + 1})"><span> <i class="ri-arrow-left-s-line"></i></span></li>`;
    }
    element ? element.innerHTML = liTag : ''; //add li tag inside ul tag
    return liTag; //reurn the li tag
}


