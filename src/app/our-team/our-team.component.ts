import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  doctors = [
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    },
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    },
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    },
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    },
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    },
    {
      docPhoto: '../../assets/images/team/doctor-01.jpg',
      docName: 'Dr. Frank Bigham',
      docPosition: 'Associate Dentist',
      docInfo: 'Dr. Frank Bigham has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997',
      docPhone: '1-248-715-8767'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
