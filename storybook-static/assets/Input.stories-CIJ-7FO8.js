import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as K}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";function Q({label:r,linkText:l,linkHref:i,type:o="text",value:s,defaultValue:p,placeholder:q,message:d,icon:t,clearable:m=!1,error:f=!1,disabled:h=!1,onChange:c,onClear:n,name:w,id:b,autoComplete:N}){const[g,a]=K.useState(p??""),u=s!==void 0?s:g,V=!!u,X=["input-field",f?"is-error":"",h?"is-disabled":"",m&&V?"has-value":""].filter(Boolean).join(" ");function Y($){const I=$.target.value;s===void 0&&a(I),c==null||c(I)}function Z(){s===void 0&&a(""),n==null||n()}return e.jsxs("div",{className:X,children:[(r||l)&&e.jsxs("div",{className:"input-label-row",children:[r&&e.jsx("label",{className:"input-label",htmlFor:b,children:r}),l&&e.jsx("a",{className:"input-link",href:i??"#",children:l})]}),e.jsxs("div",{className:"input-and-message",children:[e.jsxs("div",{className:"input-control",children:[t&&e.jsx("span",{className:"input-icon material-symbols-rounded","aria-hidden":"true",children:t}),e.jsx("input",{type:o,name:w,id:b,value:u,placeholder:q,disabled:h,autoComplete:N,onChange:Y}),m&&V&&e.jsx("button",{type:"button",className:"input-clear",onClick:Z,"aria-label":"Clear field",children:e.jsx("span",{className:"material-symbols-rounded","aria-hidden":"true",children:"close"})})]}),d&&e.jsx("span",{className:"input-message",children:d})]})]})}function U({label:r,options:l,value:i,placeholder:o,message:s,icon:p,error:q=!1,disabled:d=!1,onChange:t,name:m,id:f}){var g;const[h,c]=K.useState(""),n=i!==void 0?i:h,w=((g=l.find(a=>a.value===n))==null?void 0:g.label)??o??"",b=["input-field","input-select",q?"is-error":"",d?"is-disabled":""].filter(Boolean).join(" ");function N(a){const u=a.target.value;i===void 0&&c(u),t==null||t(u)}return e.jsxs("div",{className:b,children:[r&&e.jsx("div",{className:"input-label-row",children:e.jsx("label",{className:"input-label",htmlFor:f,children:r})}),e.jsxs("div",{className:"input-and-message",children:[e.jsxs("div",{className:"input-control",children:[p&&e.jsx("span",{className:"input-icon material-symbols-rounded","aria-hidden":"true",children:p}),e.jsx("span",{className:"input-select-display",children:w}),e.jsx("span",{className:"input-select-chevron material-symbols-rounded","aria-hidden":"true",children:"arrow_drop_down"}),e.jsxs("select",{name:m,id:f,value:n,disabled:d,onChange:N,"aria-label":r,children:[o&&e.jsx("option",{value:"",disabled:!0,children:o}),l.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]})]}),s&&e.jsx("span",{className:"input-message",children:s})]})]})}Q.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Field label"},linkText:{required:!1,tsType:{name:"string"},description:"Optional link text in the label row"},linkHref:{required:!1,tsType:{name:"string"},description:"Optional link href"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'tel' | 'number' | 'search' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'number'"},{name:"literal",value:"'search'"},{name:"literal",value:"'url'"}]},description:"Input type",defaultValue:{value:"'text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (uncontrolled)"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},message:{required:!1,tsType:{name:"string"},description:"Helper or error message"},icon:{required:!1,tsType:{name:"string"},description:"Leading icon name (Material Symbols)"},clearable:{required:!1,tsType:{name:"boolean"},description:"Show clear button when field has a value",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear handler"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},autoComplete:{required:!1,tsType:{name:"string"},description:"Autocomplete attribute"}}};U.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:"Field label"},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Options"},value:{required:!1,tsType:{name:"string"},description:"Controlled value"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when no option is selected"},message:{required:!1,tsType:{name:"string"},description:"Helper or error message"},icon:{required:!1,tsType:{name:"string"},description:"Leading icon name (Material Symbols)"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},name:{required:!1,tsType:{name:"string"},description:"Select name attribute"},id:{required:!1,tsType:{name:"string"},description:"Select id attribute"}}};const se={title:"Components/Input",component:Q,parameters:{layout:"padded"}},v={args:{label:"Email address",placeholder:"you@example.com",type:"email"}},y={args:{label:"Search",placeholder:"Search tickets…",icon:"search",clearable:!0}},x={args:{label:"Email address",placeholder:"you@example.com",type:"email",defaultValue:"bad-email",error:!0,message:"Please enter a valid email address."}},S={args:{label:"Account number",defaultValue:"****-1234",disabled:!0}},T={args:{label:"Password",type:"password",placeholder:"••••••••",linkText:"Forgot password?",linkHref:"#"}},j={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(U,{label:"Section",placeholder:"Choose a section",options:[{value:"100",label:"Section 100"},{value:"115",label:"Section 115"},{value:"200",label:"Section 200"},{value:"215",label:"Section 215"}]})})};var k,E,C;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email'
  }
}`,...(C=(E=v.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var F,_,D;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search tickets…',
    icon: 'search',
    clearable: true
  }
}`,...(D=(_=y.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var L,O,P;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
    defaultValue: 'bad-email',
    error: true,
    message: 'Please enter a valid email address.'
  }
}`,...(P=(O=x.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var W,H,A;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Account number',
    defaultValue: '****-1234',
    disabled: true
  }
}`,...(A=(H=S.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var B,M,R;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    linkText: 'Forgot password?',
    linkHref: '#'
  }
}`,...(R=(M=T.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var z,G,J;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <Select label="Section" placeholder="Choose a section" options={[{
      value: '100',
      label: 'Section 100'
    }, {
      value: '115',
      label: 'Section 115'
    }, {
      value: '200',
      label: 'Section 200'
    }, {
      value: '215',
      label: 'Section 215'
    }]} />
    </div>
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Default","WithIcon","Error","Disabled","WithLinkInLabel","SelectField"];export{v as Default,S as Disabled,x as Error,j as SelectField,y as WithIcon,T as WithLinkInLabel,le as __namedExportsOrder,se as default};
