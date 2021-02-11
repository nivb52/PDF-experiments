
(async function x() {
    try {
      const fs = require('fs')
      const data_json = require('./chunk_data.json');
      const pdf = require('pdfjs');
      let heebo_regular = new pdf.Font(fs.readFileSync('./heb-fonts/heebo/Heebo-Regular.ttf'))
      let rubik_regular = new pdf.Font(fs.readFileSync('./heb-fonts/rubik/Rubik-Regular.ttf'))

      let fonts = {
        HeadingFont: heebo_regular ,
        ParagraphFont: rubik_regular //require('pdfjs/font/Times-Roman')
      };
        
      let doc = new pdf.Document()
      
      doc.pipe(fs.createWriteStream('output.pdf'))

      let header = doc.header().table({
        widths: [null, null],
        paddingBottom: 1 * pdf.cm
      })

      doc.footer()
        .pageNumber(function (curr, total) {
          return curr + ' / ' + total
        }, {
          textAlign: 'center'
        })

      let cell = doc.cell({
        paddingBottom: 0.5 * pdf.cm
      })
      cell.text('Features:', {
        fontSize: 16,
        font: fonts.ParagraphFont,
        defaultDecoration: 'rtl'
      })
      cell.text({
          fontSize: 14,
        lineHeight: 1.35,
        })
        .add('-')
        .add('different', {
          color: 0xf8dc3f
        })
        .add('font', {
          font: fonts.TimesRoman
        })
        .add('styling', {
          underline: true
        })
        .add('options', {
          fontSize: 9
        })
      
      function addTable(col1,col2,col3) {
       let table_temp = doc.table({
          widths: [1.5 * pdf.cm, 1.5 * pdf.cm, null, 2 * pdf.cm, 2.5 * pdf.cm],
          borderHorizontalWidths: function (i) {
            return i < 2 ? 1 : 0.1
          },
          padding: 5
       })
        
        let tr = table_temp.header({
          font: fonts.ParagraphFont,
          borderBottomWidth: 1.5
        })

        tr.cell(col1)
        tr.cell(col2)
        tr.cell(col3)
        tr.cell('Price', {
          textAlign: 'right',
          direction: 'rtl'
        })
        tr.cell('Total', {
          textAlign: 'right',
          direction: 'rtl'
        })

        return table_temp;
      }

      function addRow(table, name, desc, price) {
        let tr = table.row()
        tr.cell('מס.')

        let article = tr.cell().text()
        article.add(name, {
            font: fonts.ParagraphFont
          })
          .br()
          .add(desc, {
            fontSize: 11,
            textAlign: 'justify',
            font: fonts.ParagraphFont
          })

        tr.cell(price.toFixed(2) + ' €', {
          textAlign: 'right',
          direction: 'rtl'

        })
      }
      // console.log(data_json);
      let data = data_json;
      // const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      const data_as_row = (data_at_idx) => `${data_at_idx.driver_name} `;
      // console.log(data);
      console.log(data_as_row(data));
      
              
      for (let j = 0; j < 5;j++) {
        let table = addTable('#', 'Unit', 'אולי');
          for (let i = 0; i < 2; i++) {
          // addRow(2, data.transport_type, data_as_row(data), Math.random() * 1000)
          addRow(table, data.transport_type, data_as_row(data), Math.random() * 1000)
          }
        }

        await doc.end()
      } catch (e) {
        console.log(e)
      }
    })();