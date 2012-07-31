$(document).ready(function () {
    var filter;
    var widthOfStats = $('#bondlayout .stats').first().width();
    var colr = '';
    var selectedfilter = '';
   
  

    //on click of every bar
    /*
    $('.bond').on('click', function (event) {
        var bondName = $(this).attr('id');
        var selectedFilter = $('.dock #filters > li .svgicon.selected').parent().parent().attr('id');
        var dataGrid = '<div class="row-fluid">';

        console.log(selectedFilter);
        $.each(movies, function (index, thismovie) {

            if (thismovie['Actor'].toLowerCase() == bondName.toLowerCase()) {
              //  debugger;
                switch (selectedFilter) {

                    case 'Films':
                        dataGrid = dataGrid + '<div class="span2 well movie"> ';
                        dataGrid = dataGrid + ' <a href="' + thismovie['Box Office Source'] + '" ><img src="' + thismovie['Movie Poster'] + '" alt="' + thismovie['Movie Title'] + '"/> </a>';
                        dataGrid = dataGrid + ' <div>'+ thismovie['Movie Title']+'</div>';
                        dataGrid = dataGrid + ' <div class="movieDetails" > ' +
                                                     '<div class="row-fluid" rel="tooltip" title="profitability"> <svg class="span4 profitability" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="prof" x="0px" y="0px" width="30px" height="30px" viewBox="-346 256 100 100" enable-background="new -346 256 100 100" xml:space="preserve"><path d="M-263.363,311.56l-6.967-25.521l-19.562-12.246l19.148-3.609l0.413-5.213c0,0-14.309-6.192-25.391-8.708  c-2.433-0.553-4.653,8.025-6.731,7.853c-2.199-0.184-3.021-8.415-4.454-7.966c-8.955,2.807-14.775,15.64-14.775,15.64l13.432,5.213  l-19.7,16.04v42.107L-337.167,356h87.984L-263.363,311.56z M-296.575,337.709c-11.64,0-21.076-9.436-21.076-21.076  c0-11.639,9.436-21.075,21.076-21.075s21.076,9.436,21.076,21.075C-275.499,328.273-284.936,337.709-296.575,337.709z"/><path d="M-297.026,313.592c-1.286-0.602-2.143-1.31-2.143-2.443c0-1.664,0.935-2.584,2.143-3.08V313.592L-297.026,313.592z   M-295.195,319.575c1.323,0.602,2.258,1.416,2.258,2.727c0,1.31-0.973,2.194-2.258,2.69V319.575L-295.195,319.575z   M-297.026,301.271v2.62c-4.167,0.46-7.828,2.621-7.828,7.471c0,4.921,4.323,6.195,7.828,7.435v6.621  c-0.273,0.07-0.506,0.07-0.74,0.07c-2.142,0-4.284-0.602-6.153-1.521l-0.507,4.461c2.688,0.601,4.011,0.956,6.971,0.956  c0.117,0,0.273,0,0.429-0.036v2.797h1.831v-2.902c4.478-0.496,7.944-2.69,7.944-7.33c0-5.098-4.519-6.372-7.944-7.611v-6.55  c0.117-0.035,0.194-0.035,0.311-0.035c1.908,0,3.816,0.39,5.53,1.062l0.507-4.071c-1.948-0.603-4.051-0.886-6.348-0.886v-2.548  H-297.026L-297.026,301.271z"/></svg>' + thismovie['Profitabilty'] + '</div>' +
                                                     '<div class="row-fluid" rel="tooltip" title="audience score"> <svg class="span4 audience" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="audience" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 189 178" enable-background="new 0 0 189 178" xml:space="preserve"><g>	<circle fill="none" cx="68.881" cy="69.917" r="3.237"/>	<circle fill="none" cx="82.275" cy="67.951" r="3.237"/>	<circle fill="none" cx="114.024" cy="68.194" r="3.237"/>	<path fill="none" d="M118.817,87.34c6.249,0.658,11.713-2.583,12.203-7.237l-22.635-2.38   C107.896,82.377,112.566,86.684,118.817,87.34z"/>	<circle fill="none" cx="127.488" cy="69.61" r="3.237"/>	<circle fill="none" cx="82.275" cy="67.951" r="3.237"/>	<circle fill="none" cx="68.881" cy="69.917" r="3.237"/>	<path fill="none" d="M118.817,87.34c6.249,0.658,11.713-2.583,12.203-7.237l-22.635-2.38   C107.896,82.377,112.566,86.684,118.817,87.34z"/>	<circle fill="none" cx="127.488" cy="69.61" r="3.237"/>	<circle fill="none" cx="114.024" cy="68.194" r="3.237"/>	<path d="M79.779,86.969c-0.491,0.124-0.991,0.233-1.508,0.309c-6.218,0.913-11.81-2.101-12.489-6.731l22.517-3.306   c0.286,1.945-0.351,3.863-1.635,5.505c2.745-1.152,5.722-1.853,8.839-2.018c0.781-2.658,1.024-5.518,0.596-8.438   c-1.59-10.828-11.657-18.316-22.484-16.727c-10.827,1.59-18.316,11.656-16.726,22.484c1.295,8.821,8.217,15.422,16.592,16.708   C75.075,91.772,77.22,89.134,79.779,86.969z M81.804,64.748c1.769-0.26,3.413,0.964,3.673,2.732s-0.963,3.413-2.732,3.673   c-1.769,0.26-3.414-0.963-3.673-2.732C78.812,66.652,80.035,65.008,81.804,64.748z M68.411,66.715   c1.769-0.26,3.413,0.964,3.672,2.732c0.26,1.769-0.963,3.413-2.732,3.673c-1.77,0.26-3.413-0.963-3.673-2.732   C65.418,68.619,66.642,66.974,68.411,66.715z"/> <path d="M122.169,55.462c-10.884-1.145-20.634,6.751-21.779,17.634c-0.29,2.756,0.009,5.437,0.78,7.926   c8.441,1.35,15.538,6.661,19.35,13.95c9.84-0.198,18.228-7.688,19.283-17.731C140.948,66.357,133.053,56.606,122.169,55.462z    M124.269,69.271c0.188-1.778,1.779-3.068,3.558-2.881c1.777,0.187,3.066,1.779,2.881,3.558c-0.188,1.778-1.779,3.067-3.558,2.881   S124.081,71.049,124.269,69.271z M110.805,67.855c0.188-1.778,1.781-3.068,3.559-2.881c1.778,0.187,3.067,1.78,2.881,3.558   c-0.188,1.778-1.78,3.068-3.559,2.88C111.907,71.226,110.619,69.633,110.805,67.855z M118.817,87.34   c-6.251-0.657-10.921-4.963-10.432-9.617l22.635,2.38C130.53,84.757,125.066,87.998,118.817,87.34z"/>	<path d="M96.515,130.559c12.856,0.166,23.414-10.122,23.581-22.979c0.167-12.857-10.122-23.415-22.979-23.582   s-23.416,10.121-23.582,22.978C73.368,119.834,83.657,130.392,96.515,130.559z M104.913,96.175c2.1,0.027,3.779,1.752,3.754,3.853   c-0.027,2.1-1.752,3.781-3.853,3.754c-2.1-0.027-3.782-1.752-3.753-3.852C101.089,97.828,102.812,96.148,104.913,96.175z    M110.126,111.875c-0.07,5.498-6.114,9.877-13.497,9.781c-7.384-0.095-13.312-4.63-13.24-10.128L110.126,111.875z M89.009,95.969   c2.1,0.027,3.78,1.752,3.753,3.853c-0.027,2.101-1.751,3.781-3.852,3.753c-2.102-0.027-3.781-1.752-3.754-3.852   C85.183,97.622,86.909,95.941,89.009,95.969z"/></g></svg>' + thismovie['Audience score'] + '</div>' +
                                                     '<div class="row-fluid" rel="tooltip" title="rotten Tomato score"> <svg class="span4 rotten" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 12.6411 11.9569"> <g id="Layer_x0020_1">  <metadata id="CorelCorpID_0Corel-Layer"/>  <path class="fil0" d="M5.69604 2.79328c0.529698,0.28764 1.83458,1.85305 2.53469,1.61799 0.426767,-0.143298 -0.327412,-1.39426 -0.873048,-2.09004 0.14017,-0.294641 1.73284,-0.223885 2.20578,-0.229546 1.84337,0.927418 3.07764,2.62138 3.07764,4.55695 0,2.93121 -2.83052,5.30815 -6.32048,5.30815 -3.49026,0 -6.32063,-2.37694 -6.32063,-5.30815 0,-1.68994 0.940825,-3.19562 2.40643,-4.16787 0.327412,-0.0691169 0.403232,0.145235 1.78423,-0.162365 -0.655121,0.246527 -1.24828,1.40856 -0.980299,2.05578 0.829552,0.180538 1.88567,-1.55573 2.48568,-1.5809zm-3.02178 -0.509291c1.29699,-0.686552 1.3591,-0.717088 2.59635,-0.84996 0.272893,-0.0291959 0.669421,-0.651993 0.559043,-1.29624 0.0789482,-0.0594346 0.218821,-0.170558 0.381335,-0.128552 0.259337,0.0670315 0.401593,0.871559 0.31624,1.36044 0.959593,-0.0589877 2.43429,0.251443 2.6038,0.512717 -0.860685,-0.118124 -2.02286,0.0396231 -2.05355,0.322496 -0.094291,0.869473 0.710981,0.918481 1.00771,1.91636 -0.886604,-0.315346 -1.86988,-1.23442 -2.3184,-1.65791 -0.506907,-0.0134063 -1.26764,0.702937 -2.32748,1.60384 0,-0.871112 1.19257,-1.73373 1.06967,-1.96492 -0.0787993,-0.148065 -1.22906,0.208691 -1.83473,0.18173z"/> </g></svg> ' + thismovie['Rotten Tomatoes'] + '</div>' +
                                               '</div>';

                        dataGrid = dataGrid + ' </div> '; //closing of row-fluid and well
                        break;

                    case 'kills':
                        dataGrid = dataGrid + ' <div class="span4 well ' + bondName + '"> ';
                        dataGrid = dataGrid + ' <div class="row-fluid"> ';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a href="' + thismovie['Box Office Source'] + '" ><img src="' + thismovie['Movie Poster'] + '" alt="' + thismovie['Movie Title'] + '"/></a>' +
                                               '</div>';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a class="row-fluid" href="' + thismovie['Box Office Source'] + '" >' + thismovie['Movie Title'] + '  |  ' + thismovie['Year'] + '</a>' +
                                                     '<div class="row-fluid" rel="tooltip" title="No of kills"> <svg class="span4 kills" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Capa_1" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g>	<path  d="M50,100C22.432,100,0.004,77.573,0.004,50.005C0.004,22.438,22.432,0.01,50,0.01   c27.568,0,49.996,22.428,49.996,49.995C99.996,77.573,77.568,100,50,100z M50,3.391c-25.703,0-46.613,20.911-46.613,46.614   C3.386,75.708,24.296,96.62,50,96.62s46.614-20.912,46.614-46.615C96.614,24.302,75.703,3.391,50,3.391z"/>	<path  d="M50,98.545c-0.155,0-0.281-0.125-0.281-0.281V1.701c0-0.156,0.126-0.282,0.281-0.282   c0.156,0,0.282,0.126,0.282,0.282v96.563C50.282,98.42,50.156,98.545,50,98.545z"/>	<path  d="M98.282,50.264H1.718c-0.156,0-0.282-0.126-0.282-0.282s0.126-0.282,0.282-0.282h96.563   c0.155,0,0.281,0.126,0.281,0.282S98.437,50.264,98.282,50.264z"/>	<g>		<path  d="M32.889,51.673H1.718c-0.934,0-1.691-0.757-1.691-1.691s0.758-1.691,1.691-1.691h31.171    c0.935,0,1.691,0.757,1.691,1.691S33.824,51.673,32.889,51.673z"/>		<path  d="M98.301,51.673H67.132c-0.935,0-1.691-0.757-1.691-1.691s0.757-1.691,1.691-1.691h31.169    c0.934,0,1.691,0.757,1.691,1.691S99.235,51.673,98.301,51.673z"/>	</g>	<path  d="M50.009,99.965c-0.934,0-1.69-0.758-1.69-1.691V67.102c0-0.934,0.757-1.69,1.69-1.69   c0.935,0,1.691,0.757,1.691,1.69v31.172C51.701,99.208,50.944,99.965,50.009,99.965z"/>	<path  d="M50.009,34.551c-0.934,0-1.69-0.757-1.69-1.69V1.691c0-0.934,0.757-1.691,1.69-1.691   c0.935,0,1.691,0.757,1.691,1.691V32.86C51.701,33.794,50.944,34.551,50.009,34.551z"/>	<circle  cx="50" cy="50.005" r="1.945"/></g></svg>' + thismovie['Kills'] + '</div>' +
                                                     '<div class="row-fluid" rel="tooltip" title="Non Human kills"> <svg class="span4 nonhuman"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Default" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 99.93 99.93" enable-background="new 0 0 99.93 99.93" xml:space="preserve"><g>	<g id="SPLINE">		<path d="M7.192,56.884c-1.302-2.459-1.881-3.869-2.242-5.346c-0.362-1.477-0.506-3.019-0.506-4.044    c0-1.024,0.145-1.53,0.289-1.783c0.145-0.253,0.29-0.253,0.495-0.133c0.205,0.12,0.47,0.361,0.832,0.771    c0.361,0.41,0.82,0.989,1.024,1.338c0.205,0.349,0.157,0.47,0.079,0.729c-0.079,0.259-0.187,0.657,1.476,3.26"/>	</g>	<g id="SPLINE_1_">		<path d="M8.638,51.676c2.387-2.603,3.544-2.784,4.701-2.73c1.158,0.054,2.315,0.344,3.279,0.898    c0.964,0.554,1.735,1.374,3.146,2.447c1.411,1.072,3.459,2.398,5.134,3.435c1.676,1.037,2.978,1.784,4.026,2.591    c1.048,0.808,1.844,1.676,2.326,2.628c0.482,0.952,0.651,1.989,0.554,3.049c-0.096,1.061-0.458,2.146-1.181,3.375    c-0.723,1.229-1.808,2.604-2.953,3.507c-1.146,0.904-2.351,1.338-3.339,1.664c-0.988,0.325-1.759,0.542-2.893,0.579    c-1.133,0.036-2.628-0.109-4.002-0.555c-1.374-0.446-2.627-1.193-3.796-2.122c-1.169-0.928-2.254-2.037-3.218-3.338    c-0.964-1.302-1.808-2.796-2.447-4.466c-0.639-1.67-1.073-3.514-0.783-5.755"/>	</g>	<g id="SPLINE_2_">		<path d="M90.204,31.959c0-2.546-0.966-4.948-1.703-6.548c-0.737-1.602-1.245-2.402-1.633-2.967    c-0.388-0.565-0.658-0.895-0.909-1.021c-0.252-0.126-0.486-0.048-0.632,0.04s-0.205,0.186-0.244,0.439s-0.059,0.664-0.068,1.055    c-0.01,0.39-0.01,0.761,0.176,1.171c0.185,0.41,0.556,0.859,0.741,1.289c0.186,0.43,0.186,0.84,0.2,1.558    c0.015,0.717,0.044,1.742-0.57,2.664"/>	</g>	<g id="SPLINE_3_">		<path d="M85.561,29.638c-1.071-0.893-2.366-0.625-3.34-0.223c-0.975,0.401-1.629,0.937-2.21,1.8    c-0.58,0.863-1.086,2.053-1.488,3.081c-0.402,1.027-0.699,1.89-1.265,3.273c-0.566,1.384-1.399,3.289-2.054,4.598    s-1.131,2.023-1.443,2.931c-0.312,0.908-0.461,2.009-0.357,3.14c0.104,1.131,0.461,2.292,1.354,3.437    c0.894,1.146,2.322,2.277,3.914,2.961c1.593,0.685,3.348,0.923,4.971,0.833c1.622-0.089,3.11-0.506,4.583-1.295    c1.473-0.789,2.932-1.949,3.973-3.393c1.042-1.443,1.667-3.169,1.919-5.148c0.253-1.979,0.134-4.211-0.35-6.465    s-1.332-4.531-3.564-7.21"/>	</g> <g id="SPLINE_4_">		<path d="M51.183,11.686c-0.291-2.427-0.942-3.692-1.508-4.578c-0.566-0.886-1.048-1.392-1.29-1.802    c-0.241-0.41-0.241-0.724-0.193-1.146c0.048-0.421,0.145-0.952,0.265-1.205c0.121-0.253,0.266-0.229,0.435-0.181    c0.168,0.048,0.361,0.121,0.879,0.591c0.519,0.47,1.362,1.338,2.526,2.657c1.163,1.32,2.646,3.092,4.159,6.249"/>	</g>	<g id="SPLINE_5_">		<path d="M56.455,12.272c3.749,2.109,5.682,4.101,7.029,5.926s2.109,3.485,2.548,4.999c0.439,1.513,0.556,2.88,0.371,4.394    c-0.186,1.513-0.673,3.173-1.474,4.51c-0.801,1.338-1.914,2.353-2.92,3.104c-1.005,0.752-1.903,1.24-2.84,1.513    c-0.938,0.274-1.914,0.333-3.008,0.352c-1.093,0.02-2.304,0-3.182-0.088c-0.879-0.088-1.426-0.244-2.021-0.664    c-0.596-0.42-1.24-1.104-1.777-1.797c-0.537-0.692-0.967-1.396-1.191-2.284c-0.225-0.889-0.244-1.963-0.244-3.056    c0-1.094,0.02-2.207,0.01-3.105c-0.01-0.898-0.049-1.582-0.137-2.275s-0.224-1.396-0.488-2.041    c-0.264-0.645-0.654-1.23-0.986-1.826c-0.332-0.595-0.605-1.201-0.811-1.865c-0.205-0.664-0.342-1.387-0.293-2.167    c0.049-0.781,0.284-1.621,0.684-2.236c0.4-0.615,0.967-1.006,1.558-1.333c0.59-0.327,1.206-0.591,3.9-0.649"/>	</g>	<g id="SPLINE_6_">	<path d="M24.935,20.695c-0.536-3.75-0.402-6.026-0.211-7.593c0.191-1.566,0.44-2.422,0.69-2.929s0.504-0.665,0.725-0.681    c0.222-0.016,0.411,0.11,0.641,0.475c0.229,0.363,0.498,0.965,0.656,1.352c0.158,0.388,0.206,0.562,0.214,0.712    s-0.024,0.276-0.087,0.529c-0.063,0.253-0.158,0.633-0.11,1.167c0.047,0.534,0.237,1.222,1.589,4.199"/>	</g>	<g id="SPLINE_7_">		<path d="M29.042,17.927c3.036-1.429,4.598-1.339,5.722-0.803s1.808,1.518,2.165,2.396c0.357,0.878,0.387,1.652,0.521,2.574    c0.134,0.923,0.372,1.994,0.744,3.036c0.373,1.042,0.878,2.053,1.562,3.05c0.685,0.997,1.548,1.979,2.203,2.961    c0.654,0.982,1.101,1.964,1.324,2.872s0.223,1.741,0,2.738s-0.67,2.158-1.577,3.273c-0.908,1.117-2.277,2.188-3.69,2.842    c-1.414,0.655-2.873,0.893-4.777,0.625c-1.904-0.268-4.256-1.042-5.997-2.202c-1.741-1.161-2.872-2.709-3.557-4.227    s-0.922-3.006-1.086-4.479c-0.164-1.473-0.253-2.931,0.06-5.089c0.312-2.158,1.027-5.016,2.277-6.801"/>	</g>	<g id="SPLINE_8_">		<polyline points="34.237,80.645 33.812,81.41 33.507,82.201 33.182,83.703 33.171,84.971 33.603,86.421 34.574,88.431     35.842,90.625 37.176,92.54 37.917,93.368 38.751,94.114 39.708,94.783 40.794,95.361 42.01,95.835 43.357,96.19 44.846,96.412     46.539,96.488 48.506,96.408 50.82,96.16 53.531,95.735 56.61,95.123 60.004,94.315 63.662,93.303 71.296,90.801 77.769,88.378     81.63,86.702 82.791,86.049 83.662,85.417 84.384,84.741 84.998,84.006 85.962,82.348 86.643,80.392 87.016,77.979 87.051,75.1     86.813,72.452 86.373,70.668 85.724,69.442 84.881,68.353 84.016,67.46 83.269,66.901 82.493,66.621 80.413,66.494 79.249,66.445     78.011,66.221 76.669,65.702 75.238,64.942 73.784,64.019 72.505,62.95 71.562,61.736 70.825,60.392 70.109,58.96 69.312,57.611     68.339,56.479 67.016,55.458 65.23,54.455 63.167,53.691 62.104,53.485 61.017,53.397 58.696,53.51 56.098,53.916 53.32,54.583     50.522,55.486 47.932,56.524 45.739,57.642 44.788,58.287 43.918,59.031 43.126,59.898 42.425,60.884 41.835,61.974     41.375,63.153 41.056,64.403 40.858,65.672 40.711,68.046 40.708,69.956 40.604,71.603 40.192,73.254 39.41,74.905 38.262,76.488     36.876,77.945 35.439,79.271 34.237,80.645   "/>	</g></g></svg>' + thismovie['Non Human Kills'] + '</div>' +
                                               '</div>';

                        dataGrid = dataGrid + ' </div></div> '; //closing of row-fluid and well
                        break;

                    case 'kissed':

                        dataGrid = dataGrid + ' <div class="span4 well ' + bondName + '"> ';
                        dataGrid = dataGrid + ' <div class="row-fluid"> ';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a href="' + thismovie['Box Office Source'] + '" ><img src="' + thismovie['Movie Poster'] + '" alt="' + thismovie['Movie Title'] + '"/></a>' +
                                               '</div>';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a class="row-fluid" href="' + thismovie['Box Office Source'] + '" >' + thismovie['Movie Title'] + '  |  ' + thismovie['Year'] + '</a>' +
                                                     '<div class="row-fluid" rel="tooltip" title="Girls Kissed">  <svg class="span4 girlskissed" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Svg6" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"> <path d="M63.554,66.319c0.379,0.969,1.495,1.443,2.492,1.062l1.319-0.504c0.997-0.382,1.5-1.474,1.121-2.44   c-0.379-0.969-1.494-1.443-2.492-1.064l-1.318,0.505C63.676,64.26,63.175,65.354,63.554,66.319L63.554,66.319z M69.211,63.939   c0.279,0.891,1.232,1.39,2.129,1.118c0.896-0.274,1.398-1.216,1.12-2.104s-1.231-1.39-2.129-1.117   C69.434,62.109,68.934,63.051,69.211,63.939L69.211,63.939z M48.962,53.703h1.322c9.937,0,19.321-5.765,11.628-5.765h-12.29H37.335   C29.64,47.938,39.026,53.703,48.962,53.703L48.962,53.703z M50.108,38.272c3.054-4.95,12.455-9.169,33.044-2.829   c9.258,2.852,15.875-0.683,15.677-0.472C96.482,37,85.559,45.188,85.559,45.188l-0.072,2.789c0,13.431-15.703,24.33-35.38,24.405   c-19.676-0.075-35.592-10.974-35.592-24.405l-0.071-2.789c0,0-10.926-8.188-13.272-10.217c-0.197-0.211,6.419,3.323,15.677,0.472   C37.437,29.103,47.052,33.322,50.108,38.272L50.108,38.272z"/></g></svg> ' + thismovie['Girls Kissed'] + '</div>' +
                                              '</div>';

                        dataGrid = dataGrid + ' </div></div> '; //closing of row-fluid and well
                        break;

                    case 'believed_dead':

                        dataGrid = dataGrid + ' <div class="span4 well ' + bondName + '"> ';
                        dataGrid = dataGrid + ' <div class="row-fluid"> ';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a href="' + thismovie['Box Office Source'] + '" ><img src="' + thismovie['Movie Poster'] + '" alt="' + thismovie['Movie Title'] + '"/></a>' +
                                               '</div>';
                        dataGrid = dataGrid + ' <div class="span6"> ' +
                                                     '<a class="row-fluid" href="' + thismovie['Box Office Source'] + '" >' + thismovie['Movie Title'] + '  |  ' + thismovie['Year'] + '</a>' +
                                                     '<div class="row-fluid" rel="tooltip" title="Enemy Mastermind Believed Bond Dead"> <svg class="span4 belivedead" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="30px" height="50px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g>	<circle cx="45.259" cy="22.206" r="2.839"/>	<path d="M49.999,24.892c-0.116,0-1.365,2.269-1.365,2.269c-0.222,0.376-0.096,0.86,0.281,1.083   c0.377,0.222,0.862,0.097,1.084-0.282c0.222,0.379,0.707,0.504,1.085,0.282c0.375-0.223,0.502-0.707,0.279-1.083   C51.363,27.161,50.118,24.892,49.999,24.892z"/>	<circle cx="54.739" cy="22.206" r="2.839"/>	<path d="M65.114,1.053H51.224h-2.447h-13.89L23.217,27.958L39.91,98.947h8.866h2.447h8.866l16.693-70.989L65.114,1.053z    M55.218,31.927l-1.408,4.621h-1.716v-1.542h-0.451v1.542h-1.417v-1.542h-0.452v1.542h-1.417v-1.542h-0.45v1.542h-1.715   l-1.409-4.621c-3.079-1.798-5.153-5.13-5.153-8.952c0-5.727,4.645-10.371,10.37-10.371c5.727,0,10.372,4.644,10.372,10.371   C60.371,26.797,58.296,30.128,55.218,31.927z"/></g></svg>' + thismovie['Enemy Mastermind Believed Bond Dead'] + '</div>' +
                                              '</div>';

                        dataGrid = dataGrid + ' </div></div> '; //closing of row-fluid and well
                        break;



                }//end of switch


            }//end if  
        });//end each movie 

        dataGrid = dataGrid + '</div>';
        $('#dataGrid').html(dataGrid);


    });//end of bar click
  
  */
    $(document).on('mouseenter', '#dataGrid .movie', function () {
       
        var offset = $(this).offset();
        var w = $(this).width();
        var h = $(this).height();
        var pl = parseInt($(this).css("padding-left"));
        var pr = parseInt($(this).css("padding-right"));
        var pt = parseInt($(this).css("padding-top"));
        var pb = parseInt($(this).css("padding-bottom"));
        w =w+ pl + pr;
        h =h+ pt + pb;
        debugger;
        $('.movieDetails', this).css({
           
            'top': offset.top,
            'left': offset.left,
            'width': w,
            'height':h
            
        });
        $('.movieDetails', this).fadeIn(500);

        
    });
    $(document).on('mouseleave', '#dataGrid .movie', function () {
        $('.movieDetails', this).fadeOut(500);
       
    });

    $('#filters > li').on('click', function (event) {

        debugger;
        //reset previous data blank
        $('#dataGrid').html(''); 
        $('.bond .stats.min').removeClass('min');
        $('.bond .stats.max').removeClass('max');


        filter = $(this).attr('id');
        $('#filters > li .svgicon.selected').removeClass('selected');

        //display count
        $.each(bonds, function (index, thisbond) {
            $('#' + thisbond.name + ' .bullet').html('<p style="margin-top: -4px;padding-left: 10px;padding-top :20px;">'+thisbond[filter].toString().replace(/(\.\d{1,2})\d*$/, "$1")+'</p>');
            
        });

        //calculate width % and animate  
        $.each(normalized_bonds, function (index, thisbond) {
            // debugger;
            switch (filter) {

                case 'Films':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width

                    var widthOfImage =30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedFilms.svg\')');
              /*      
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                    
                    break;

                case 'Average_Kills':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedKills.svg\')');
              
                   /* $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */

                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                   

                    break;
                case 'Average_Kissed':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedKissed.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);
                    
                    break;
                case 'Average_Slept_With':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width

                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedSlept.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                    break;
            
                case 'Average_Believed_Dead':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width

                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedDead.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                    
                    break;
                case 'Average_Bond_James_Bond':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedBond.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                    break;
                case 'Average_Martinis_Drunk':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMartinis.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);
                    break;

                case 'Average_Audience_Rating':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width

                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedAudience.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);

                   

                    /*color all stats bar with min and if max color max
                    if (min_Property_Bond_Names[filter] == thisbond.name) {
                        var minWidth = w;
                        $('#' + thisbond.name + ' .stats .min').animate({
                            width: minWidth
                        }, 500);
                    }

                    if (max_Property_Bond_Names[filter] == thisbond.name) {
                        var minWidth = w;
                        $('#' + thisbond.name + ' .stats .max').animate({
                            width: minWidth
                        }, 500);
                    }*/
                    break;



                case 'Average_Rotten_Tomatoes_Rating':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedTomato.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);


                    break;

                case 'Average_Profitability':
                    $('#' + filter).find('.svgicon').addClass('selected'); //add selected
                    var w = widthOfStats * thisbond[filter]; //calculate % width
                    var widthOfImage = 30;
                    w = Math.round(w / widthOfImage) * widthOfImage;
                    if (w > widthOfStats) {
                        w = w - widthOfImage;
                    }

                    $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedProfit.svg\')');
                    /*
                    $.each(min_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMin.svg\')');
                        }
                    });
                    $.each(max_Property_Bond_Names[filter], function (index, bname) {
                        if (bname == thisbond.name) {
                            $('#' + thisbond.name + ' .stats').css('background-image', 'url(\'../img/dottedMax.svg\')');
                        }
                    });
                    */
                    $('#' + thisbond.name + ' .stats').animate({
                        width: w
                    }, 500);


                    break;
            }// end of switch 

        });//end of normalized bonds
    }); //end of click 

    if (window.location.hash) {
        console.log(window.location.hash);
        $(''+window.location.hash).click();
    }
    else {
        $('#filters >li:first').click();
    }

    
    
}); //end of document.ready
