import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    const player = 'craig';
    const certDate = new Date();
    const ss = String(certDate.getSeconds());
    const dd = String(certDate.getDate()).padStart(2, '0');
    const mm = String(certDate.getMonth() + 1).padStart(2, '0');
    const yyyy = certDate.getFullYear();
    const fileDate = `${ss}_${dd}_${mm}_${yyyy}`;
    const date = `${mm}/${dd}/${yyyy}`;

    const doc = new PDFDocument({
      layout: 'landscape',
      size: 'A4',
    });

    doc.pipe(
      fs.createWriteStream(
        `certificates/${fileDate}_${player}_certificate.pdf`,
      ),
    );
    doc.image('src/assets/images/cert.png', 0, 0, { width: 841 });
    doc.text('Hello world!');

    doc.end();

    // const doc = new jsPDF({
    //   orientation: 'landscape',
    // });

    // doc.addImage('PNG', 0, 0, 297, 210);
    // doc.setFontSize(
    //   40,
    // ); /* Set the font size by changing the number between the parentheses */
    // doc.setTextColor(
    //   0,
    //   0,
    //   0,
    // ); /* Change the RGB text color by changing the numbers between the parentheses */
    // doc.setFont('Lato-Black', 'bold');
    // doc.text(player, doc.internal.pageSize.width / 2, 120, {
    //   align: 'center',
    // }); /* This tells the PDF to add text to the page. The first argument is the text to add (in this case a JavaScript variable), the second is the x-coordinate (in this case we’re using a function to find a middle point for the document), the third is the y-coordinate (in millimeters), the fourth and fifth arguments are null, and the sixth argument says that the text should be centered */
    // doc.setFont('Lato-Regular', 'normal');
    // doc.setFontSize(15);
    // doc.text(date, doc.internal.pageSize.width / 2, 172, {
    //   align: 'center',
    // }); /* See above for the full explanation of the doc.text() function */
    // doc.save(
    //   'Certificate.pdf',
    // ); /* Swap out ‘Certificate’ with what you want your certificate to be named */
    // /* Change the file name between these quotes to the file that you exported as the base certificate */

    return 'worked';
  }
}
