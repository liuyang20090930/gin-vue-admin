import service from '@/utils/request'

// @Tags Liuyang
// @Summary 创建liuyang1994518
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Liuyang true "创建liuyang1994518"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /Liuyang1994/createLiuyang [post]
export const createLiuyang = (data) => {
  return service({
    url: '/Liuyang1994/createLiuyang',
    method: 'post',
    data
  })
}

// @Tags Liuyang
// @Summary 删除liuyang1994518
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Liuyang true "删除liuyang1994518"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /Liuyang1994/deleteLiuyang [delete]
export const deleteLiuyang = (data) => {
  return service({
    url: '/Liuyang1994/deleteLiuyang',
    method: 'delete',
    data
  })
}

// @Tags Liuyang
// @Summary 批量删除liuyang1994518
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除liuyang1994518"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /Liuyang1994/deleteLiuyang [delete]
export const deleteLiuyangByIds = (data) => {
  return service({
    url: '/Liuyang1994/deleteLiuyangByIds',
    method: 'delete',
    data
  })
}

// @Tags Liuyang
// @Summary 更新liuyang1994518
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Liuyang true "更新liuyang1994518"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /Liuyang1994/updateLiuyang [put]
export const updateLiuyang = (data) => {
  return service({
    url: '/Liuyang1994/updateLiuyang',
    method: 'put',
    data
  })
}

// @Tags Liuyang
// @Summary 用id查询liuyang1994518
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Liuyang true "用id查询liuyang1994518"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /Liuyang1994/findLiuyang [get]
export const findLiuyang = (params) => {
  return service({
    url: '/Liuyang1994/findLiuyang',
    method: 'get',
    params
  })
}

// @Tags Liuyang
// @Summary 分页获取liuyang1994518列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取liuyang1994518列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /Liuyang1994/getLiuyangList [get]
export const getLiuyangList = (params) => {
  return service({
    url: '/Liuyang1994/getLiuyangList',
    method: 'get',
    params
  })
}
