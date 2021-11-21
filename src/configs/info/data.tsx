import React, { Fragment } from 'react'
import { AiFillMediumSquare } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsFillBriefcaseFill, BsLinkedin } from 'react-icons/bs'
import { FaCalendar, FaGithub, FaGraduationCap, FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { RiFlag2Fill } from 'react-icons/ri'
import { SiDevpost } from 'react-icons/si'

import Link from '../../components/layout/rightColumn/Link'
import { InfoType } from './types'

export const data: InfoType = {
  leftColumn: {
    sections: [
      {
        title: 'Info',
        items: [
          {
            title: 'Name',
            value: 'Digiacomo Gianmarco',
            icon: FaUser,
          },
          {
            title: 'Birth Date',
            value: '08/12/1997',
            icon: FaCalendar,
          },
          {
            title: 'Phone',
            value: '+39 338 756 9346',
            icon: BsTelephoneFill,
          },
          {
            title: 'Email',
            value: (
              <Fragment>
                digiacomogianmarco
                <wbr />
                @gmail.com
              </Fragment>
            ),
            icon: GrMail,
          },
        ],
      },
      {
        title: 'Social',
        items: [
          {
            title: 'LinkedIn',
            value: 'gianmarco-digiacomo',
            icon: BsLinkedin,
            link: 'https://www.linkedin.com/in/giandigia/',
          },
          {
            title: 'GitHub',
            value: 'GianDigia',
            icon: FaGithub,
            link: 'https://github.com/GianDigia',
          },
          {
            title: 'Devpost',
            value: 'GianDigia',
            icon: SiDevpost,
            link: 'https://devpost.com/GianDigia/',
          },
          {
            title: 'Medium',
            value: 'digiacomogianmarco',
            icon: AiFillMediumSquare,
            link: 'https://medium.com/@digiacomogianmarco',
          },
        ],
      },
    ],
  },
  rightColumn: {
    title: 'Digiacomo Gianmarco',
    subtitle: 'Web Developer',
    sections: [
      {
        title: 'Work Experiences',
        icon: BsFillBriefcaseFill,
        items: [
          {
            dates: {
              from: 'Jan 2020',
            },
            title: 'Front End Developer at Fatture in Cloud',
            description:
              'Fatture in Cloud is the most used Italian invoicing software with more than 400k paying customers. As a Front End Developer at Fatture in Cloud my responsibility was mainly to convert the product from a PHP project with some standalone React modules to a React single page application saving most of the already existing codebase, always aiming to follow modern best practices and to deliver clean, optimized and well-typed code. I also gained experience mentoring colleagues and  managing the internal design system',
            notes: 'React, Redux, TypeScript, CSS, StoryBook',
          },
          {
            dates: {
              from: 'May 2018',
              to: 'Aug 2019',
            },
            title: 'Full Stack Developer at Pix Group Italia',
            description: (
              <>
                Pix creates product distribution solutions for large homogeneous
                groups, particularly for schools. As part of a 2 man team, my
                work consisted in the design, implementation and maintenance of
                the company's internal management software. The software was
                built in Ruby on Rails. It had responsive views and dozen of
                thousands of product records imported from different suppliers.
                The result of this work is accessible in a minimal part on
                <Link to={'www.schoolwear.it'}>www.schoolwear.it</Link>
              </>
            ),
            notes: 'HTML, CSS, JS, jQuery, Ruby, Ruby on Rails',
          },
          {
            title: 'Full Stack Developer',
            dates: {
              from: 'Dec 2015',
              to: 'Oct 2017',
            },
            description:
              "Develop a web application to create and manage insurance policies. At the beginning of my Web Developer career, I worked for a friend's parents which needed a web application to manage their clients' data.",
            notes: 'HTML, CSS, JS, PHP',
          },
        ],
      },
      {
        title: 'Events',
        icon: RiFlag2Fill,
        items: [
          {
            title: 'HackUPC (Hackathon in Barcelona)',
            dates: {
              from: 'Oct 2019',
              to: 'Oct 2019',
            },
          },
          {
            title: 'StartHack 2019 (Hackathon in Saint Gallen)',
            dates: {
              from: 'Mar 2019',
              to: 'Mar 2019',
            },
          },
          {
            title: 'Google HashCode 2019',
            dates: {
              from: 'Mar 2019',
              to: 'Mar 2019',
            },
          },
          {
            title:
              'Winner of Everis challenge at HackUPC (Hackathon in Barcelona)',
            dates: {
              from: 'Oct 2018',
              to: 'Oct 2018',
            },
          },
          {
            title: 'Google HashCode 2018',
            dates: {
              from: 'Mar 2018',
              to: 'Mar 2018',
            },
          },
        ],
      },
      {
        title: 'Education',
        icon: FaGraduationCap,
        items: [
          {
            title: 'Bachelor Degree in Computer Science',
            description: 'University of Trento',
            dates: {
              from: 'Sep 2016',
              to: 'Mar 2020',
            },
          },
          {
            title: 'High School Graduation in IT and Telecommunications',
            description: 'ISIS A. Malignani (Udine)',
            dates: {
              from: 'Sep 2011',
              to: 'Jun 2016',
            },
          },
        ],
      },
    ],
  },
}
