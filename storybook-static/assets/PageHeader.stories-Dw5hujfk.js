import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-BioFo8Zg.js";import{T as y}from"./Tabs-Kb0X0PxE.js";import{S as R}from"./Steps-BAdu9gLs.js";import"./index-yBjzXJbu.js";function i({title:o,subtitle:t,tabs:c,steps:n}){const g=["page-header",!!c?"has-tabs":"",!!n?"has-steps":""].filter(Boolean).join(" ");return e.jsxs("section",{className:g,children:[n,e.jsx("div",{className:"page-header-content",children:e.jsxs("div",{className:"card-text-pair",children:[e.jsx("span",{className:"display500",children:o}),t&&e.jsx("span",{className:"labelRegular40 text-secondary",children:t})]})}),c]})}i.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main title"},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Supporting subtitle"},tabs:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tabs rendered below the text pair"},steps:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Steps rendered above the text pair"}}};const k={title:"Components/PageHeader",component:i,parameters:{layout:"fullscreen"}},a={args:{title:"My Tickets",subtitle:"Minnesota Timberwolves"}},s={render:()=>{const[o,t]=x.useState("upcoming");return e.jsx(i,{title:"My Tickets",subtitle:"Minnesota Timberwolves",tabs:e.jsx(y,{tabs:[{value:"upcoming",label:"Upcoming"},{value:"past",label:"Past"},{value:"archived",label:"Archived"}],activeTab:o,onChange:t})})}},r={render:()=>e.jsx(i,{title:"Buy Tickets",subtitle:"Minnesota Timberwolves",steps:e.jsx(R,{steps:[{label:"Seats",state:"completed"},{label:"Summary",state:"active"},{label:"Payment",state:"pending"}]})})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'My Tickets',
    subtitle: 'Minnesota Timberwolves'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState('upcoming');
    return <PageHeader title="My Tickets" subtitle="Minnesota Timberwolves" tabs={<Tabs tabs={[{
      value: 'upcoming',
      label: 'Upcoming'
    }, {
      value: 'past',
      label: 'Past'
    }, {
      value: 'archived',
      label: 'Archived'
    }]} activeTab={active} onChange={setActive} />} />;
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,h,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <PageHeader title="Buy Tickets" subtitle="Minnesota Timberwolves" steps={<Steps steps={[{
    label: 'Seats',
    state: 'completed'
  }, {
    label: 'Summary',
    state: 'active'
  }, {
    label: 'Payment',
    state: 'pending'
  }]} />} />
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const A=["Default","WithTabs","WithSteps"];export{a as Default,r as WithSteps,s as WithTabs,A as __namedExportsOrder,k as default};
