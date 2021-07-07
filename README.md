#14.0 네비게이션에는 3가지 종류가 있다.
      1) stack, tabs, drawer 

#14.2 Stack.Navigator에는 여러가지 옵션이 있어서 mode나 headerMod 같은 거... 
      페이지가 넘어가는 애니메이션을 다양하게 설정할 수 있다. 

#14.3 Appearance.addChangeListener를 사용하면 사용자가 Dark 모드라고 아이폰을 설정해놓으면 앱의 스타일을 기본적으로 다크모드로 만들 수 있다. 

#14.4 리액트 네이티브의 스타일드 컴포넌트를 기존 엔진과 달라서 자식에게 상위 요소의 스타일을 물려줄 수가 없다.

#14.6 rn에서는 input 대신에 <TextInput> 이라고 있는데 다양한 속성(secureTextEntry, keyboardType, returnKeyType, returnKeyLabel)이 있다. 

#14.7 autofocus 속성을 사용하면 페이지가 넘어갔을 때 해당 태그로 자동으로 포커징해준다.
      <TextInput>의 onSubmitEditing속성, react의 ref, focus() 메소드를 이용해서 자동으로 다음 TextInput 태그로 넘겨 줄 수 있다.

#14.8 <KeyboardAvoidingView> 태그를 활용하면 키보드에 맞게 컨텐츠를 상단으로 자동으로 옮겨 줄 수 있다. 
      단, ios랑 android에서 동작이 다르니 Platform을 이용해서 ios일 때 동작과 android일 때의 동작을 다르게 해줘야 한다. 
      <TouchableWithoutFeedback>은 기본적으로 <Touchable>과 똑같으나 대신에 눌렀을 때의 애니메이션이 없다.

#14.10 <TouchableWithoutFeedback>에서 disabled={Platform.OS === "web"} 옵션을 주면 웹에서도 <Input> 태그가 잘 작동함. 
       react native에는 form 태그가 없기 때문에 react hooks form을 써야 함.
       react-form을 쓰기 위해서는 useEffect를 써야한다. 

#14.11 ngrok나 localtunnel을 사용하면 바깥 시뮬레이터에서도 접근이 가능하다.

#14.12 react-native-hooks 에서 form 값을 실시간으로 지켜볼 수 있는 watch라는 게 있다. 
       route의 params를 이용하면 다른 페이지에서 초기값을 세팅할 수 있다. 
       대신 해당값들에 value={watch("username")} 같은 것들을 해줘야 한다.
