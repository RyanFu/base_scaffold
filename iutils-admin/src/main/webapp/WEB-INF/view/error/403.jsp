<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/view/include/taglib.jsp"%>
<html>
<head>
	<title>403 ${fnc:getConfig("iutils.name")} iutils.cn</title>
	<%@ include file="../include/head.jsp"%>
</head>
<body>
	<div class="admin-content">
	    <div class="admin-content-body">
	       <div class="am-g">
	        <div class="am-u-sm-12">
	            <h2 class="am-text-center am-text-xxxl am-margin-top-lg">403. Forabidden</h2>
	            <p class="am-text-center">权限不足，拒绝访问</p>
				<p class="error-info">您可以：<a href="javascript:;" onclick="history.go(-1)">&lt; 返回上一页</a><span> | </span><a href="javascript:;" onclick="top.location='${ctx}'">去首页 &gt;</a></p>
	        </div>
	      </div>
	    </div>
	</div>
</body>
</html>