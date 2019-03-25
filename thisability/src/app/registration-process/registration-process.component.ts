import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-process',
  templateUrl: './registration-process.component.html',
  styleUrls: ['./registration-process.component.css']
})
export class RegistrationProcessComponent implements OnInit {
  whatToBringArray = null;
  stepsArray = null;
  whereToGoArray = null;
  constructor() { }

  ngOnInit() {
    this.whatToBringArray = [{
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Application Form (Download from the Link Above)'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Two 2x2 ID Photos'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Barangay Clearance, Voter’s ID, or Any Government-issued ID'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Medical Certificate/ Clinical Abstract'
    }];

    this.stepsArray = [{
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Bring the aforementioned requirements.'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'Fill up the application form and affix your photo.'
    },
    {
      imgUrl: '../../../assets/bg-placeholder.png',
      caption: 'You will be guided through verification of requirements, encoding of information, and issuance of your ID.'
    }];

    this.whereToGoArray = [
    `PWD Affairs Office (PDAO) of your City Hall`,
    `<span class="Poppins-700">For soldiers admitted at V. Luna Hospital from a far away area or with an urgent case:</span>
            National Council on Disability Affairs (NCDA)`,
    `Office of the Mayor`,
    `You can also go to your nearest City/Municipal Health Office,
              or your Barangay satellite Health Office for verification of Certificate of Disability`,
    `City/Municipality Social Welfare and Development Office (CSWDO/MSWDO)`
    ];
  }
}
