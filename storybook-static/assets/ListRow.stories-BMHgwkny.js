import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as a,T as r,C as L,a as W}from"./ListRow-B0zcfdXQ.js";import{I as n}from"./Icon-CuxBy8T1.js";import"./index-yBjzXJbu.js";const f={title:"Components/ListRow",component:a,parameters:{layout:"padded"}},s={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{trailing:e.jsx(n,{name:"chevron_right",size:200}),children:e.jsx(r,{label:"Section 115 · Row 4",sublabel:"2 tickets"})})})},i={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{leading:e.jsx(L,{children:e.jsx(n,{name:"star",size:200})}),trailing:e.jsx(n,{name:"chevron_right",size:200}),children:e.jsx(r,{label:"Portland Marmots",sublabel:"Home · Game 12"})})})},t={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{trailing:e.jsx(W,{label:"$120",sublabel:"each"}),trailingGap:"sm",children:e.jsx(r,{label:"Section 115 · Row 4",sublabel:"Seat 7–8"})})})},o={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{notTappable:!0,children:e.jsx(r,{label:"Order confirmed",sublabel:"#2024-88431"})})})},l={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{disabled:!0,children:e.jsx(r,{label:"Section 215 · Row 8",sublabel:"Sold out"})})})};var d,c,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <ListRow trailing={<Icon name="chevron_right" size={200} />}>
        <TextPair label="Section 115 · Row 4" sublabel="2 tickets" />
      </ListRow>
    </div>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,p,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <ListRow leading={<CircleContainer>
            <Icon name="star" size={200} />
          </CircleContainer>} trailing={<Icon name="chevron_right" size={200} />}>
        <TextPair label="Portland Marmots" sublabel="Home · Game 12" />
      </ListRow>
    </div>
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,u,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <ListRow trailing={<TrailingText label="$120" sublabel="each" />} trailingGap="sm">
        <TextPair label="Section 115 · Row 4" sublabel="Seat 7–8" />
      </ListRow>
    </div>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var j,v,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <ListRow notTappable>
        <TextPair label="Order confirmed" sublabel="#2024-88431" />
      </ListRow>
    </div>
}`,...(R=(v=o.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var T,w,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <ListRow disabled>
        <TextPair label="Section 215 · Row 8" sublabel="Sold out" />
      </ListRow>
    </div>
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const z=["Simple","WithLeadingIcon","WithTrailingText","NotTappable","Disabled"];export{l as Disabled,o as NotTappable,s as Simple,i as WithLeadingIcon,t as WithTrailingText,z as __namedExportsOrder,f as default};
