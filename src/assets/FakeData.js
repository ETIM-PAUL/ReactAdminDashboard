import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import { BsKanban, BsBoxSeam, BsShield, BsFillChatSquareDotsFill } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiAdminFill, RiContactsLine } from 'react-icons/ri';
import { MdLocalHospital, MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const patientGridImage = (props) => (
  <div className="image flex gap-4 items-center">
    <img
      className="rounded-full w-10 h-10"
      src={props.PatientImage}
      alt="employee"
    />
    <div>
      <p>{props.PatientName}</p>
    </div>
  </div>
);

const patientGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center'
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'admin',
        icon: <RiAdminFill />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'patients',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'appointments',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'tasks-manager',
        icon: <BsKanban />,
      },
      {
        name: 'messages',
        icon: <BsFillChatSquareDotsFill />,
      },
    ],
  }
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
    name: 'Rome',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
    name: 'Fred',

  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
    name: 'Iro',

  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
    name: 'Tommy',

  },
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
    name: 'Sally',

  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
    name: 'Helena',

  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
    name: 'Kobe',

  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
    name: 'Salma',

  },
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
    name: 'Esor',

  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
    name: 'Legion',

  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
    name: 'Jahmal',

  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
    name: 'Teddy',

  },
];

export const billsData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '354',
    percentage: '-4%',
    title: 'Employees',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '1,396',
    percentage: '+23%',
    title: 'Patients',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const userProfileData = [
  {
    icon: <MdLocalHospital />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Notifications',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    link: 'messages',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    link: 'tasks-manager'
  },
];

export const patientsGrid = [
  { type: 'checkbox', width: '50' },

  {
    width: '150',
    template: patientGridImage,
    textAlign: 'Center',
    headerText: 'Patient',
  },
  {
    field: 'PatientName',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Illness',
    headerText: 'Illness',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'TotalBills',
    headerText: 'Bills Accured',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: patientGridStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'PatientID',
    headerText: 'Patient ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Etim Paul',
    Title: 'Chief Medical Director',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Minister, Ministry of Health',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Ifeanyi John',
    Title: 'Senior Consultant',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Paul',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Oge Chi',
    Title: 'Senior Consultant',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Paul',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Foreign Consultant',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Paul',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'Foreign Consultant',
    HireDate: '01/02/2021',
    Country: 'India',
    ReportsTo: 'Paul',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Udom Inyene',
    Title: 'Registrar',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Paul',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Ali Isa',
    Title: 'Resident',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Edum David',
    Title: 'Resident',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Ntui Sydney',
    Title: 'Intern',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Edum',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'Intern',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Ali',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Ekpo Gottfried',
    Title: 'Intern',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Ali',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Farouq',
    Title: 'Intern',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Edum',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 3,
    Name: 'Abu Julia',
    Title: 'Nurse Manager',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Ali',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Jane',
    Title: 'Nurse Asst. Manager',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Abu',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Felicia',
    Title: 'Nurse Practitioner',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Siegbert',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Tomasi Ikem',
    Title: 'Specialist Nurse',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Omar',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Ogunlaye Tope',
    Title: 'Specialist Nurse',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Omar',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Bisi Davolio',
    Title: 'Dietician',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Etim',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Akinola Daniel',
    Title: 'Therapist',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Etim',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Wilfred Tom',
    Title: 'Pharmacist',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Etim',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Joe Cole',
    Title: 'Physiotherapist',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Isil Darobe',
    Title: 'Podiatrist',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Fred Tom',
    Title: 'Pathologist',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Owo Irem',
    Title: 'Clinical Assistant',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Oge',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Shittu Tonia',
    Title: 'Porter',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Owo',
    EmployeeImage:
      avatar2,

  },
  {
    EmployeeID: 2,
    Name: 'Twisim Balogun',
    Title: 'Ward Clerk',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Shittu',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Ita Atim',
    Title: 'Ward Clerk',
    HireDate: '01/02/2021',
    Country: 'Nigeria',
    ReportsTo: 'Shittu',
    EmployeeImage:
      avatar4,
  },
];

export const patientsData = [
  {
    PatientID: 10248,
    PatientName: 'Vincent',
    TotalBills: 32.38,
    Illness: 'Tuberculosis',
    Status: 'pending',
    StatusBg: '#FB9678',
    PatientImage:
      avatar3,
  },
  {
    PatientID: 845954,
    PatientName: 'Jie Yan',
    TotalBills: 87.99,
    Illness: 'Broken Leg',
    Status: 'pending',
    StatusBg: '#FB9678',
    PatientImage:
      avatar4,
  },
  {
    PatientID: 874534,
    PatientName: 'Danai',
    TotalBills: 122.99,
    Illness: 'Prostrate Cancer',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    PatientImage:
      avatar,
  },
  {
    PatientID: 38489,
    PatientName: 'Miron',
    TotalBills: 87.99,
    Illness: 'Brain Tumor',
    Status: 'active',
    StatusBg: '#03C9D7',
    PatientImage:
      avatar2,
  },
  {
    PatientID: 24546,
    PatientName: 'Frank',
    TotalBills: 84.99,
    Illness: 'Typhoid',
    Status: 'complete',
    StatusBg: '#8BE78B',
    PatientImage:
      avatar3,
  },
  {
    PatientID: 845954,
    PatientName: 'Jie Yan',
    TotalBills: 87.99,
    Illness: 'Ear Infection',
    Status: 'pending',
    StatusBg: '#FB9678',
    PatientImage:
      avatar4,
  },
  {
    PatientID: 874534,
    PatientName: 'Danai',
    TotalBills: 122.99,
    Illness: 'Ulcer',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    PatientImage:
      avatar,
  },
  {
    PatientID: 38489,
    PatientName: 'Miron',
    TotalBills: 87.99,
    Illness: 'Skin Rashes',
    Status: 'active',
    StatusBg: '#03C9D7',
    PatientImage:
      avatar2,
  },
  {
    PatientID: 24546,
    PatientName: 'Frank',
    TotalBills: 84.99,
    Illness: 'Tuberculosis',
    Status: 'complete',
    StatusBg: '#8BE78B',
    PatientImage:
      avatar2,
  },
  {
    PatientID: 874534,
    PatientName: 'Danai',
    TotalBills: 122.99,
    Illness: 'Brain Tumor',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    PatientImage:
      avatar3,
  },

  {
    PatientID: 845954,
    PatientName: 'Jie Yan',
    TotalBills: 87.99,
    Illness: 'Diabetics',
    Status: 'pending',
    StatusBg: '#FB9678',
    PatientImage:
      avatar,
  },
  {
    PatientID: 874534,
    PatientName: 'Danai',
    TotalBills: 122.99,
    Illness: 'Breast Cancer',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    PatientImage:
      avatar4,
  },
  {
    PatientID: 38489,
    PatientName: 'Miron',
    TotalBills: 87.99,
    Illness: 'Typhoid',
    Status: 'active',
    StatusBg: '#03C9D7',
    PatientImage:
      avatar3,
  },
  {
    PatientID: 24546,
    PatientName: 'Frank',
    TotalBills: 84.99,
    Illness: 'Kidney Failure',
    Status: 'complete',
    StatusBg: '#8BE78B',
    PatientImage:
      avatar2,
  },
  {
    PatientID: 874534,
    PatientName: 'Danai',
    TotalBills: 122.99,
    Illness: 'STD (Gonorhhea)',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    PatientImage:
      avatar,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: `Frank's Dialysis`,
    Location: 'Dialysis Center',
    StartTime: '2022-11-10T04:00:00.000Z',
    EndTime: '2022-11-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Miron Lab Result',
    Location: 'Laboratory Center',
    StartTime: '2022-11-11T06:30:00.000Z',
    EndTime: '2022-11-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Danai Lab Test',
    Location: 'Laboratory Center',
    StartTime: '2022-11-12T04:00:00.000Z',
    EndTime: '2022-11-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Vincent Appointment',
    Location: 'Consultant Office',
    StartTime: '2022-11-13T07:30:00.000Z',
    EndTime: '2022-11-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Staffs Meeting',
    Location: 'Conference Hall',
    StartTime: '2022-11-14T06:30:00.000Z',
    EndTime: '2022-11-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 5 },
  { x: 2, yval: 6 },
  { x: 3, yval: 5 },
  { x: 4, yval: 7 },
  { x: 5, yval: 4 },
  { x: 6, yval: 3 },
  { x: 7, yval: 9 },
  { x: 8, yval: 5 },
  { x: 9, yval: 6 },
  { x: 10, yval: 5 },
  { x: 11, yval: 7 },
  { x: 12, yval: 8 },
  { x: 13, yval: 4 },
  { x: 14, yval: 5 },
  { x: 15, yval: 3 },
  { x: 16, yval: 4 },
  { x: 17, yval: 11 },
  { x: 18, yval: 10 },
  { x: 19, yval: 2 },
  { x: 20, yval: 12 },
  { x: 21, yval: 4 },
  { x: 22, yval: 7 },
  { x: 23, yval: 6 },
  { x: 24, yval: 8 },

];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

  {
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
  },

];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
];
