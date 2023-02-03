const presets = [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: {
        version: '3',
        proposals: true,
      },
    }],
  ];
  
  export default { presets };
