import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {


  rights = [
    'Patients shall be free from all forms of abuse and harassment.',
    'Receive assistance in a prompt, courteous, respectful and responsible manner.',
    'Be treated without regard to race, ethnicity, national origin, religion, sex, age, mental or physical disability or medical conditions, sexual orientation, claims experience, medical history, evidence of insurability, genetic information, or source of payment.',
    'Receive care in a safe setting.',
    'Be referred, according to your needs, to a provider suitable to care for your condition.',
    'Receive information about the clinic, its services, practitioners and providers, and patients rights and responsibilities.',
    'Be treated in a manner respectful to your personal privacy and dignity.',
    'Be assured of confidential handling of all communication and medical information as provided by law and professional medical ethics.',
    'Receive a list of participating providers.',
    'Make recommendations regarding this patient rights and responsibilities policy.',
    'Be advised if a physician proposes to engage in or perform human experimentation affecting your care or treatment. The patient has the right to refuse to participate in such research projects.',
    'Patients shall be free to exercise their rights without being subjected to discrimination or fear of reprisal.',
    'Adolescent members reaching adulthood and still receiving pediatric care can get help in choosing an adult PCP.',
    'Knowledge of the name of the physician who has primary responsibility for coordinating your care and the names and professional relationships of other physicians who will see you.',
  ];

  responsibilities = [
    'Provide honest, complete information to those providing medical care.',
    'Responsible for informing your provider of a Living Will or Advance Directive, or any document that could affect care.',
    'Know the benefits and exclusions of your health insurance coverage.',
    'Know how to access services in routine, urgent and emergency situations.',
    'Follow the advice of your Primary Care Provider (PCP) and consider the likely consequences when you refuse to comply.',
    'Notify your provider of changes in address, phone number and insurance information in a timely manner.',
    'Provide a responsible adult to transport a patient home and stay with them for up to 24 hours if required by physician.',
    'Be respectful and courteous to clinic staff and other patients.',
    'Supply information that the clinic and its practitioners and providers need in order to provide care.',
    'Make us aware of any concerns you have regarding the care you were provided by calling Customer Relations.',
    'Ask questions and seek clarification to understand your health problems and participate in mutually agreed upon treatment goals.',
    'Make payment of all services or non-covered services and applicable co-payments at the time service is provided.',
    `Establish an ongoing rapport with your Primary Care Provider (PCP) and behave in a manner that
     supports the care provided to others and the general function of the facility.`,
    `Keep scheduled appointments and notify the provider’s office promptly if you are delayed or
      cannot keep an appointment. (Charges may be incurred for missed appointments that are not
      canceled 24 hours in advance.)`,

  ];

  constructor() { }



  ngOnInit() {
  }

}
