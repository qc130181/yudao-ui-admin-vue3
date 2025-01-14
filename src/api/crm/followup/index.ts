import request from '@/config/axios'

// 跟进记录 VO
export interface FollowUpRecordVO {
  id: number // 编号
  bizType: number // 数据类型
  bizId: number // 数据编号
  type: number // 跟进类型
  content: string // 跟进内容
  picUrls: string[] // 图片
  fileUrls: string[] // 附件
  nextTime: Date // 下次联系时间
  businessIds: number[] // 关联的商机编号数组
  contactIds: number[] // 关联的联系人编号数组
}

// 跟进记录 API
export const FollowUpRecordApi = {
  // 查询跟进记录分页
  getFollowUpRecordPage: async (params: any) => {
    return await request.get({ url: `/crm/follow-up-record/page`, params })
  },

  // 查询跟进记录详情
  getFollowUpRecord: async (id: number) => {
    return await request.get({ url: `/crm/follow-up-record/get?id=` + id })
  },

  // 新增跟进记录
  createFollowUpRecord: async (data: FollowUpRecordVO) => {
    return await request.post({ url: `/crm/follow-up-record/create`, data })
  },

  // 修改跟进记录
  updateFollowUpRecord: async (data: FollowUpRecordVO) => {
    return await request.put({ url: `/crm/follow-up-record/update`, data })
  },

  // 删除跟进记录
  deleteFollowUpRecord: async (id: number) => {
    return await request.delete({ url: `/crm/follow-up-record/delete?id=` + id })
  },

  // 导出跟进记录 Excel
  exportFollowUpRecord: async (params) => {
    return await request.download({ url: `/crm/follow-up-record/export-excel`, params })
  }
}
