$(document).ready(function(){

    // self portrait section
    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup1").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup1, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup1").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup2").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup2, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup2").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup3").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup3, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup3").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup4").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup4, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_h." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup4").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup5").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup5, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup5").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup6").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup6, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup6").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "selfportrait.json",
        beforeSend: function() {
            $("#sp_photoGroup7").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup7, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"selfportrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#sp_photoGroup7").html(html);
        }
    });

    // portrait section
    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup1").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup1, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup1").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup2").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup2, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup2").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup3").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup3, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup3").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup4").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup4, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup4").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup5").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup5, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup5").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup6").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup6, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup6").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup7").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup7, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup7").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup8").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup8, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup8").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup9").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup9, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_h." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup9").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup10").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup10, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup10").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup11").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup11, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup11").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup12").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup12, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup12").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup13").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup13, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup13").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "portrait.json",
        beforeSend: function() {
            $("#portrait_photoGroup14").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup14, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"portrait\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_h." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#portrait_photoGroup14").html(html);
        }
    });

    // nature section
    $.ajax({
        type: "get",
        url: "nature.json",
        beforeSend: function() {
            $("#nature_photoGroup1").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup1, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"nature\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#nature_photoGroup1").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "nature.json",
        beforeSend: function() {
            $("#nature_photoGroup2").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup2, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"nature\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_h." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#nature_photoGroup2").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "nature.json",
        beforeSend: function() {
            $("#nature_photoGroup3").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup3, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"nature\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#nature_photoGroup3").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "nature.json",
        beforeSend: function() {
            $("#nature_photoGroup4").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup4, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"nature\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#nature_photoGroup4").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "nature.json",
        beforeSend: function() {
            $("#nature_photoGroup5").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup5, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"nature\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#nature_photoGroup5").html(html);
        }
    });

    // concert section
    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup1").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup1, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup1").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup2").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup2, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup2").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup3").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup3, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup3").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup4").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup4, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup4").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup5").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup5, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_h." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup5").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup6").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup6, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup6").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup7").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup7, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup7").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup8").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup8, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup8").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup9").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup9, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup9").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "concert.json",
        beforeSend: function() {
            $("#concert_photoGroup10").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photoGroup10, function(i, value) {
                html += "<a href='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_o." + value.originalformat + "\' " + "data-fancybox=\"concert\"" + "'>";
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
                html += "</a>"
            });
            $("#concert_photoGroup10").html(html);
        }
    });

    // lightbox call for self portrait
    $('[data-fancybox="selfportrait"]').fancybox();

    // lightbox call for portrait
    $('[data-fancybox="portrait"]').fancybox();

    // lightbox call for nature
    $('[data-fancybox="nature"]').fancybox();

    // lightbox call for concert
    $('[data-fancybox="concert"]').fancybox();
});

/* set the width of the sidebar to 100% (show it) */
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
}

/* set the width of the sidebar to 0% (hide it) */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

/* tabs for photos */
function openPortfolio(evt, portfolioName) {
    var i, tabcontent, tablinks;

    // get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(portfolioName).style.display = "block";
    evt.currentTarget.className += " active";
}