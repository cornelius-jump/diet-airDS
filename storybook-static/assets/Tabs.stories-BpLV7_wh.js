import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-BioFo8Zg.js";import{T as r}from"./Tabs-Kb0X0PxE.js";import"./index-yBjzXJbu.js";const x={title:"Components/Tabs",component:r,parameters:{layout:"padded"}},b=[{value:"seats",label:"Seats"},{value:"summary",label:"Summary"},{value:"payment",label:"Payment"}],e={render:()=>{const[t,s]=p.useState("seats");return m.jsx(r,{tabs:b,activeTab:t,onChange:s,ariaLabel:"Checkout steps"})}},a={render:()=>{const[t,s]=p.useState("seats");return m.jsx(r,{tabs:b,activeTab:t,onChange:s,neutral:!0,ariaLabel:"Checkout steps"})}};var o,c,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState('seats');
    return <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} ariaLabel="Checkout steps" />;
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,l,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState('seats');
    return <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} neutral ariaLabel="Checkout steps" />;
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const C=["Default","Neutral"];export{e as Default,a as Neutral,C as __namedExportsOrder,x as default};
