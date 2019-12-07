import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {


  testimonials = [
    {
      firstCol: 'col1',
      cols: [
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial text-center'
        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial testimonial-bg1 text-center'
        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial testimonial-bg2 text-center'

        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial testimonial-bg1 text-center'

        },
      ]
    },
    {
      secondCol: 'col2',
      cols1: [
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial testimonial-bg2 text-center'

        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial text-center'

        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial testimonial-bg1 text-center'

        },
        {
          tesPhoto: '../../assets/images/content/testimonials-author-1-1.jpg',
          tesSubPhoto: '../../assets/images/content/testimonials-author-1-2.jpg',
          tesTitle: 'Porcelain Veneers',
          tesName: 'Wilmer Stevenson,',
          tesPosition: 'Analyst',
          tesText: `
            I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infectio
            I had to make an emergency appointment at Medin Dental Clinic.
            I have been a patient ever since.
            My dentist is very reassuring and very helpful.
          `,
          tesClasses: 'testimonial text-center'

        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
