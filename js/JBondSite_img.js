$(document).ready(function () {

    var filter;
    var widthOfStats = $('#bondlayout .stats').first().width();
    var url;
    $('#filters > li').on('click', function (event) {

        filter = $(this).attr('id');
        //display Number
        $.each(bonds, function (index, thisbond) {
            $('#' + thisbond.name + ' .number').html(thisbond[filter]);
        });

        //animate relative % 
        $.each(normalized_bonds, function (index, thisbond) {
            switch (filter) {
                case 'films':
                    u = '/Jbond/img/films.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 100;
                   // w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                    //    w = w-widthOfImage;
                    }

                    /*
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    */

                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-color': '#808080' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " films :" + thisbond[filter]);
                    break;


                case 'kills':
                    u = '/Jbond/img/red.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30; 
                    w = Math.round(w / widthOfImage) * widthOfImage; 
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " kills :" + thisbond[filter]);
                    break;

                case 'kissed':
                    u = '/Jbond/img/bullet_green.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 32;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " kissed :" + thisbond[filter]);
                    break;

                case 'iSlept':
                    u = '/Jbond/img/red.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " iSlept :" + thisbond[filter]);
                    break;

                case 'eSlept':
                    u = '/Jbond/img/bullet_green.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 32;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " eSlept :" + thisbond[filter]);
                    break;

                case 'believed_dead':
                    u = '/Jbond/img/coffin.png'
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 100;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " believed_dead :" + thisbond[filter]);
                    break;

                case 'bond_james_bond':
                    u = '/Jbond/img/bullet_green.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 32;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " bond_james_bond :" + thisbond[filter]);
                    break;

                case 'martinis_drunk':
                    u = '/Jbond/img/red.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " martinis_drunk :" + thisbond[filter]);
                    break;

                case 'rotten_tomato':
                    u = '/Jbond/img/bullet_green.png';
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 32;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }
                    $('#' + thisbond.name + ' .stats').animate({
                        opacity: 0,
                        width: w
                    }, 500, function () {
                        $(this).css({ 'background-image': 'url(' + u + ')' }).animate({ opacity: 1 });
                    });
                    console.log(thisbond.name + " rotten_tomato :" + thisbond[filter]);
                    break;

            } //end of switch

        }); //end of normalized_bonds


    });//on Click  event ends here

    $('#filters li:first').click();


});