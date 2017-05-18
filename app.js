 // $(document).ready(function() {

 //     // Constructing the suggestion engine
 //     var data = new Bloodhound({
 //         datumTokenizer: Bloodhound.tokenizers.obj.whitespace('NAME'),
 //         queryTokenizer: Bloodhound.tokenizers.whitespace,
 //         prefetch: {
 //             url: 'data.json'
 //         }
 //     });

 //     // Initializing the typeahead
 //     $('#txtarea').typeahead(null, {
 //         name: 'data',
 //         displayKey: 'NAME',
 //         source: data.ttAdapter(),
 //         limit: 10,

 //         templates: {
 //             empty: [
 //                 '<div class="empty-message">',
 //                 'unable to find match for the current query',
 //                 '</div>'
 //             ].join('\n'),
 //             suggestion: Handlebars.compile('<div>{{data.records.NAME}}"in"{{data.records.TBNAME}}</div>')
 //              // suggestion: function(){
 //              //   return "no results";
 //              // }
 //         }
 //     });
 // });
// $(document).ready(function() {
//  var dt=[  
//    {  
//       "id":568,
//       "state":"al",
//       "city":"pittsview"
//    },
//    {  
//       "id":4095,
//       "state":"ga",
//       "city":"pitts"
//    }
// ];

// var engine = new Bloodhound({
//     datumTokenizer: Bloodhound.tokenizers.obj.whitespace("NAME"),
//     queryTokenizer: Bloodhound.tokenizers.whitespace,
//     prefetch: {
//               url: 'data.json'
//           }
//     //local:dt
  
// });

// $( '#txtarea' ).typeahead({
//     hint: true,
//     minLength: 1
// }, {
//     display: 'NAME',
//     source: engine.ttAdapter(),
//     templates: {
//         empty: 'No results found',
//         suggestion: function ( data ) {
//             return '<p>' +  data.NAME+'</p>';
//         }
//     }
// });

//});

// var countries = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.whitespace,
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   // url points to a json file that contains an array of country names, see
//   // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
//   prefetch: '../data/countries.json'
// });

// // passing in `null` for the `options` arguments will result in the default
// // options being used
// $('#prefetch .typeahead').typeahead(null, {
//   name: 'countries',
//   source: countries
// });