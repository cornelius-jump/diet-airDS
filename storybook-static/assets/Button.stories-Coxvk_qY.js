import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a,C as m}from"./Button-Beqz6_Me.js";import"./index-yBjzXJbu.js";const J={title:"Components/Button",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","transactional","neutral","destructive","white","white-tertiary","black"]},size:{control:"select",options:["large","small","xsmall"]},iconPosition:{control:"select",options:["leading","trailing"]},fill:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{variant:"primary",size:"large",children:"Save changes"}},i={args:{variant:"transactional",size:"large",children:"Buy tickets"}},t={args:{variant:"primary",size:"large",icon:"add",iconPosition:"leading",children:"Add item"}},n={args:{variant:"secondary",size:"large",icon:"arrow_forward",iconPosition:"trailing",children:"Continue"}},s={args:{variant:"primary",size:"large",icon:"search"}},l={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center"},children:[r.jsx(a,{variant:"transactional",children:"Transactional"}),r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"neutral",children:"Neutral"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"tertiary",children:"Tertiary"}),r.jsx(a,{variant:"destructive",children:"Destructive"}),r.jsxs("div",{style:{background:"var(--brand-core)",padding:"12px",borderRadius:"8px",display:"flex",gap:"8px"},children:[r.jsx(a,{variant:"white",children:"White"}),r.jsx(a,{variant:"white-tertiary",children:"White Tertiary"})]}),r.jsx(a,{variant:"black",children:"Black"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx(a,{variant:"primary",size:"large",children:"Large"}),r.jsx(a,{variant:"primary",size:"small",children:"Small"}),r.jsx(a,{variant:"primary",size:"xsmall",children:"X-Small"})]})},c={args:{variant:"primary",size:"large",disabled:!0,children:"Disabled"}},d={render:()=>r.jsx("div",{style:{width:"320px"},children:r.jsx(a,{variant:"primary",size:"large",fill:!0,children:"Fill width"})})},p={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(m,{variant:"neutral",size:"large",icon:"close","aria-label":"Close"}),r.jsx(m,{variant:"neutral",size:"small",icon:"close","aria-label":"Close small"}),r.jsx(m,{variant:"primary",size:"large",icon:"add","aria-label":"Add"})]})};var u,g,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Save changes'
  }
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'transactional',
    size: 'large',
    children: 'Buy tickets'
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var B,z,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    icon: 'add',
    iconPosition: 'leading',
    children: 'Add item'
  }
}`,...(b=(z=t.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,S,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'large',
    icon: 'arrow_forward',
    iconPosition: 'trailing',
    children: 'Continue'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,C,I;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    icon: 'search'
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var T,W,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="transactional">Transactional</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <div style={{
      background: 'var(--brand-core)',
      padding: '12px',
      borderRadius: '8px',
      display: 'flex',
      gap: '8px'
    }}>
        <Button variant="white">White</Button>
        <Button variant="white-tertiary">White Tertiary</Button>
      </div>
      <Button variant="black">Black</Button>
    </div>
}`,...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var P,A,D;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="xsmall">X-Small</Button>
    </div>
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,L,_;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    disabled: true,
    children: 'Disabled'
  }
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,R,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <Button variant="primary" size="large" fill>Fill width</Button>
    </div>
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var N,V,X;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <CircleButton variant="neutral" size="large" icon="close" aria-label="Close" />
      <CircleButton variant="neutral" size="small" icon="close" aria-label="Close small" />
      <CircleButton variant="primary" size="large" icon="add" aria-label="Add" />
    </div>
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const K=["Primary","Transactional","WithLeadingIcon","WithTrailingIcon","IconOnly","AllVariants","AllSizes","Disabled","Fill","Circle"];export{o as AllSizes,l as AllVariants,p as Circle,c as Disabled,d as Fill,s as IconOnly,e as Primary,i as Transactional,t as WithLeadingIcon,n as WithTrailingIcon,K as __namedExportsOrder,J as default};
