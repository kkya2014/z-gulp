/*===============================================================================
************   ui native eventListener   ************
===============================================================================*/
;
(function($L, global) {
	/*
	 * 打开指定component
	 * @param String componentName 必选 component名字
	 * @param String defaultPage 必选 如果传空(''),使用component.xml中配置的url。window的名字默认为root
	 * @param String animation  可选 type默认值为rd.window.ANIMATIONTYPEPUSH, direction默认值为rd.window.ANIMATIONSUBTYPEFROMRIGHT，time默认值为300ms，curve默认值为rd.window.ANIMATIONCURVE_EASEINEASEOUT
	 */
	$L.openComponent = function(componentName, animation) {
		$L.executeNativeJS(['component', 'openComponent'], componentName, animation)
	}

	/*
	 * 关闭当前component
	 * @param String componentName 必选 如果传空(''),关闭当前component,否则，关闭指定名称的component
	 * @param String animation  可选 type默认值为rd.window.ANIMATIONTYPEPUSH, direction默认值为rd.window.ANIMATIONSUBTYPEFROMRIGHT，time默认值为300ms，curve默认值为rd.window.ANIMATIONCURVE_EASEINEASEOUT
	 */
	$L.closeComponent = function(animation) {
		$L.executeNativeJS(['component', 'closeComponent'], animation)
	}

	/*
	 * 获取主component的componentInfo
	 */
	$L.getMainComponentInfo = function() {
		return $L.executeNativeJS(['component', 'getMainComponentInfo'])
	}

	/*
	 * 通过名字获取模块信息
	 */
	$L.getComponentInfoByName = function(componentName) {
		$L.executeNativeJS(['component', 'getComponentInfoByName'], componentName)
	}

	/*
	 * 获取当前模块信息
	 */
	$L.getCurrentComponentInfo = function() {
		$L.executeNativeJS(['component', 'getCurrentComponentInfo'])
	}

}(app, this));