import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function n({header:r,body:a,footer:d,interactive:s=!1,onClick:S}){const g=s?"card-closed-interactive":"card-closed";return e.jsxs("div",{className:g,onClick:S,role:s?"button":void 0,tabIndex:s?0:void 0,children:[r&&e.jsx("div",{className:"card-closed-header",children:r}),a&&e.jsx("div",{className:"card-closed-body",children:a}),d&&e.jsx("div",{className:"card-closed-footer",children:d})]})}function C({header:r,sections:a}){return e.jsxs("div",{className:"card-open",children:[r&&e.jsx("div",{className:"card-open-header",children:r}),e.jsx("div",{className:"card-open-content",children:a.map((d,s)=>e.jsx("div",{className:"card-open-section",children:d},s))})]})}function l({children:r,interactive:a=!1,onClick:d}){const s=a?"card-open-section-interactive":"card-open-section";return e.jsx("div",{className:s,onClick:d,role:a?"button":void 0,tabIndex:a?0:void 0,children:r})}n.__docgenInfo={description:"",methods:[],displayName:"CardClosed",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card header section"},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card body section"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card footer section"},interactive:{required:!1,tsType:{name:"boolean"},description:"Make the card interactive (hover/click states)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick handler (for interactive cards)"}}};C.__docgenInfo={description:"",methods:[],displayName:"CardOpen",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card header (rendered above sections, no background)"},sections:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"One or more section nodes. Each gets a surface background."}}};l.__docgenInfo={description:"",methods:[],displayName:"CardSection",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:"Make the section interactive",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick handler"}}};const O={title:"Components/Card",component:n,parameters:{layout:"padded"}},t={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{header:e.jsx("p",{className:"label-bold-30",children:"Order Summary"}),body:e.jsx("p",{className:"body-20",children:"2 × Section 115 · Row 4"}),footer:e.jsx("p",{className:"label-bold-30",children:"$240.00"})})})},o={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{interactive:!0,header:e.jsx("p",{className:"label-bold-30",children:"Portland Marmots"}),body:e.jsx("p",{className:"body-20",children:"Sat, Mar 15 · 7:30 PM"}),footer:e.jsx("p",{className:"body-20",children:"From $45"})})})},c={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(C,{header:e.jsx("h2",{className:"title-30",children:"Your tickets"}),sections:[e.jsx("p",{className:"body-20",children:"Section 115 · Row 4 · Seat 12"}),e.jsx("p",{className:"body-20",children:"Section 115 · Row 4 · Seat 13"})]})})},i={render:()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(l,{interactive:!0,children:e.jsx("p",{className:"label-bold-30",children:"Section A"})}),e.jsx(l,{interactive:!0,children:e.jsx("p",{className:"label-bold-30",children:"Section B"})})]})};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <CardClosed header={<p className="label-bold-30">Order Summary</p>} body={<p className="body-20">2 × Section 115 · Row 4</p>} footer={<p className="label-bold-30">$240.00</p>} />
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <CardClosed interactive header={<p className="label-bold-30">Portland Marmots</p>} body={<p className="body-20">Sat, Mar 15 · 7:30 PM</p>} footer={<p className="body-20">From $45</p>} />
    </div>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var N,v,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <CardOpen header={<h2 className="title-30">Your tickets</h2>} sections={[<p className="body-20">Section 115 · Row 4 · Seat 12</p>, <p className="body-20">Section 115 · Row 4 · Seat 13</p>]} />
    </div>
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,R,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <CardSection interactive>
        <p className="label-bold-30">Section A</p>
      </CardSection>
      <CardSection interactive>
        <p className="label-bold-30">Section B</p>
      </CardSection>
    </div>
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const q=["Closed","Interactive","Open","OpenSectionInteractive"];export{t as Closed,o as Interactive,c as Open,i as OpenSectionInteractive,q as __namedExportsOrder,O as default};
