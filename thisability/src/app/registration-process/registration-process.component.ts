import { Component, OnInit, HostListener } from '@angular/core';
import { GoogleAnalyticsService } from '../services/ga/google-analytics.service';

@Component({
  selector: 'app-registration-process',
  templateUrl: './registration-process.component.html',
  styleUrls: ['./registration-process.component.css']
})
export class RegistrationProcessComponent implements OnInit {
  whatToBringArray = null;
  stepsArray = null;
  whereToGoArray = null;
  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.ga.sendPageTracking('Registration_Process', '/registration-process');

    this.whatToBringArray = [{
      imgUrl: '../../../assets/img/what-to-bring-1.png',
      caption: 'Application Form'
    },
    {
      imgUrl: '../../../assets/img/what-to-bring-2.png',
      caption: 'Two 2x2 ID Photos'
    },
    {
      imgUrl: '../../../assets/img/what-to-bring-3.png',
      caption: 'Barangay Clearance, Voter’s ID, or Any Government-issued ID'
    },
    {
      imgUrl: '../../../assets/img/what-to-bring-4.png',
      caption: 'Medical Certificate/ Clinical Abstract'
    }];

    this.stepsArray = [{
      imgUrl: '../../../assets/img/steps-1.png',
      caption: 'Bring the aforementioned requirements.'
    },
    {
      imgUrl: '../../../assets/img/steps-2.png',
      caption: 'Fill up the application form and affix your photo.'
    },
    {
      imgUrl: '../../../assets/img/steps-3.png',
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

  downloadForm() {
    this.ga.sendEventTracking('Registration_Process', 'download_form');
  }

  downloadChecklist() {
    this.ga.sendEventTracking('Registration_Process', 'download_checklist');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const $downloadLink = document.getElementById(`dowload-link-mobile`);
    const $sources = document.getElementById(`registration-process`);
    if ($downloadLink && window.pageYOffset > $sources.clientHeight - $downloadLink.offsetHeight - 250) {
      $downloadLink.classList.remove(`shadow-darker`);
    } else {
      $downloadLink.classList.add(`shadow-darker`);
    }
  }
}
