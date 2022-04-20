import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaCalendar, FaGraduationCap, FaUser } from 'react-icons/fa'
import { GrMail, GrWorkshop } from 'react-icons/gr'
import { MdOutlineTranslate } from 'react-icons/md'

import { InfoType } from './types'

export const data: InfoType = {
  leftColumn: {
    sections: [
      {
        title: 'Info',
        items: [
          {
            title: 'Nome',
            value: 'Bardino Elisa',
            icon: FaUser,
          },
          {
            title: 'Anno di nascita',
            value: '26/07/2000',
            icon: FaCalendar,
          },
          {
            title: 'Numero di telefono',
            value: '+393401990488',
            icon: BsTelephoneFill,
          },
          {
            title: 'Email',
            value: 'elisa.bardino@gmail.com',
            icon: GrMail,
          },
        ],
      },
    ],
  },
  rightColumn: {
    title: 'Bardino Elisa',
    subtitle: 'Laureanda in Relazioni Pubbliche',
    sections: [
      {
        title: 'Educazione',
        icon: FaGraduationCap,
        items: [
          {
            title: 'Laurea in Relazioni Pubbliche',
            dates: {
              from: 'Ottobre 2019',
            },
            notes: 'Università degli Studi di Udine',
          },
          {
            title: 'Diploma in Ragioneria',
            notes:
              'IT A. Zanon - Specializzazione in relazioni internazionali e marketing',
            dates: {
              from: 'Settembre 2014',
              to: 'Giugno 2019',
            },
          },
        ],
      },
      {
        title: 'Esperienze',
        icon: GrWorkshop,
        items: [
          {
            title:
              'Stage formativo presso E.Z. World Academy - Alcalà de Henares 🇪🇸',
            notes:
              'Gestione pagina Instagram aziendale - Organizzazione eventi docenti - Gestione calendar interno - Controllo scadenze e fatturazione',
            dates: {
              from: 'Settembre 2018',
              to: 'Settembre 2018',
            },
          },
          {
            title: 'Stage formativo presso Confartigianato Udine',
            notes:
              'Gestione appuntamenti e segreteria - Gestione documenti e archivio',
            dates: {
              from: 'Gennaio 2018',
              to: 'Gennaio 2018',
            },
          },
          {
            title: 'Augsburg 🇩🇪',
            notes:
              'Vacanza studio di 3 settimane con frequentazione di una scuola di lingua',
            dates: {
              from: 'Settembre 2015',
              to: 'Settembre 2015',
            },
          },
        ],
      },
      {
        title: 'Progetti',
        icon: AiOutlineFundProjectionScreen,
        items: [
          {
            title: 'Laboratorio di teorie e tecniche di organizzazione eventi',
            notes:
              "Simulazione dell'organizzazione di un evento attraverso: studio dello scenario del fenomeno, studio delle 5W, mappatura degli stakeholders, analisi SWOT, diagramma di Gantt, redazione del budget, stesura di un piano di issue management",
            dates: {
              from: 'Ottobre 2021',
              to: 'Dicembre 2021',
            },
          },
          {
            title: 'Progetto "Impresa Simulata"',
            notes:
              "Simulazione di gestione di un'impresa: ideazione di un prodotto, creazione del brand, studio dei competitors, analisi SWOT, analisi di mercato",
            dates: {
              from: '2018',
              to: '2018',
            },
          },
        ],
      },
      {
        title: 'Lingue',
        icon: MdOutlineTranslate,
        items: [
          {
            title: '🇮🇹 Italiano - Madrelingua',
          },
          {
            title: '🇬🇧 Inglese - B2',
            notes:
              'Certificato tramite lettorato univeristario, conoscenza approfondita durante lo studio di materie di indirizzo in lingua Inglese quali Storia, Economia Politica, Marketing e Relazioni internazionali',
          },
          {
            title: '🇪🇸 Spagnolo - Buono',
            notes:
              "Conoscenza approfondita durante l'esperienza di alternanza scuola lavoro in Spagna e lo studio di materie di indirizzo in lingua Spagnola quali Storia, Marketing ed Economia Politica",
          },
          {
            title: '🇩🇪 Tedesco - Base',
            notes:
              "Conoscenza approfondita durante l'esperienza di vacanza studio in Germania e lo studio di materie di indirizzo in lingua Tedesca quali Storia, Marketing ed Economia Politica",
          },
        ],
      },
    ],
  },
}
